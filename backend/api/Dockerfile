# ---- build stage ----
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# copy only csproj first for better layer caching
COPY backend/api/api.csproj ./
RUN dotnet restore ./api.csproj

# now copy the rest and build
COPY backend/api/. ./
RUN dotnet publish ./api.csproj -c Release -o /app/publish

# ---- runtime stage ----
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Install wget for healthcheck
RUN apt-get update && apt-get install -y wget && rm -rf /var/lib/apt/lists/*

# container listens on 8080
ENV ASPNETCORE_URLS=http://0.0.0.0:8080
ENV ASPNETCORE_ENVIRONMENT=Development

COPY --from=build /app/publish ./

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=20s \
  CMD dotnet exec /app/api.dll --urls http://127.0.0.1:8080 --health || exit 1

ENTRYPOINT ["dotnet", "api.dll"]