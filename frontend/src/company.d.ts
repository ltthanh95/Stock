import {string} from "yup";

export interface CompanySearch {
    currency: string;
    exchange: string;
    name: string;
    exchangeFullName: string;
    symbol: string;
}

export interface CompanyProfile {
    address: string;
    averageVolume: number;
    beta: number;
    ceo: string;
    change: number;
    changePercentage: number;
    cik: string;
    city: string;
    companyName: string;
    country: string;
    currency: string;
    cusip: string | null;
    defaultImage: boolean;
    description: string;
    exchange: string;
    exchangeFullName: string;
    fullTimeEmployees: number | string; // your sample is "32" (string)
    image: string;
    industry: string;
    ipoDate: string | null; // empty string in your sample; allow null/empty
    isActivelyTrading: boolean;
    isAdr: boolean;
    isEtf: boolean;
    isFund: boolean;
    isin: string | null;
    lastDividend: number;
    marketCap: number;
    phone: string;
    price: number;
    range: string; // e.g., "1.18-10.58"
    sector: string;
    state: string | null;
    symbol: string;
    volume: number;
    website: string;
    zip: string | null;
}

export interface CompanyKeyRatios {
    dividendYielTTM: number;
    dividendYielPercentageTTM: number;
    peRatioTTM: number;
    pegRatioTTM: number;
    payoutRatioTTM: number;
    currentRatioTTM: number;
    quickRatioTTM: number;
    cashRatioTTM: number;
    daysOfSalesOutstandingTTM: number;
    daysOfInventoryOutstandingTTM: number;
    operatingCycleTTM: number;
    daysOfPayablesOutstandingTTM: number;
    cashConversionCycleTTM: number;
    grossProfitMarginTTM: number;
    operatingProfitMarginTTM: number;
    pretaxProfitMarginTTM: number;
    netProfitMarginTTM: number;
    effectiveTaxRateTTM: number;
    returnOnAssetsTTM: number;
    returnOnEquityTTM: number;
    returnOnCapitalEmployedTTM: number;
    netIncomePerEBTTTM: number;
    ebtPerEbitTTM: number;
    ebitPerRevenueTTM: number;
    debtRatioTTM: number;
    debtEquityRatioTTM: number;
    longTermDebtToCapitalizationTTM: number;
    totalDebtToCapitalizationTTM: number;
    interestCoverageTTM: number;
    cashFlowToDebtRatioTTM: number;
    companyEquityMultiplierTTM: number;
    receivablesTurnoverTTM: number;
    payablesTurnoverTTM: number;
    inventoryTurnoverTTM: number;
    fixedAssetTurnoverTTM: number;
    assetTurnoverTTM: number;
    operatingCashFlowPerShareTTM: number;
    freeCashFlowPerShareTTM: number;
    cashPerShareTTM: number;
    operatingCashFlowSalesRatioTTM: number;
    freeCashFlowOperatingCashFlowRatioTTM: number;
    cashFlowCoverageRatiosTTM: number;
    shortTermCoverageRatiosTTM: number;
    capitalExpenditureCoverageRatioTTM: number;
    dividendPaidAndCapexCoverageRatioTTM: number;
    priceBookValueRatioTTM: number;
    priceToBookRatioTTM: number;
    priceToSalesRatioTTM: number;
    priceEarningsRatioTTM: number;
    priceToFreeCashFlowsRatioTTM: number;
    priceToOperatingCashFlowsRatioTTM: number;
    priceCashFlowRatioTTM: number;
    priceEarningsToGrowthRatioTTM: number;
    priceSalesRatioTTM: number;
    dividendYieldTTM: number;
    enterpriseValueMultipleTTM: number;
    priceFairValueTTM: number;
    dividendPerShareTTM: number;
}

export interface CompanyIncomeStatement {
    date: string;
    symbol: string;
    reportedCurrency: string;
    cik: string;
    fillingDate: string;
    acceptedDate: string;
    calendarYear: string;
    period: string;
    revenue: number;
    costOfRevenue: number;
    grossProfit: number;
    grossProfitRatio: number;
    researchAndDevelopmentExpenses: number;
    generalAndAdministrativeExpenses: number;
    sellingAndMarketingExpenses: number;
    sellingGeneralAndAdministrativeExpenses: number;
    otherExpenses: number;
    operatingExpenses: number;
    costAndExpenses: number;
    interestIncome: number;
    interestExpense: number;
    depreciationAndAmortization: number;
    ebitda: number;
    ebitdaratio: number;
    operatingIncome: number;
    operatingIncomeRatio: number;
    totalOtherIncomeExpensesNet: number;
    incomeBeforeTax: number;
    incomeBeforeTaxRatio: number;
    incomeTaxExpense: number;
    netIncome: number;
    netIncomeRatio: number;
    eps: number;
    epsdiluted: number;
    weightedAverageShsOut: number;
    weightedAverageShsOutDil: number;
    link: string;
    finalLink: string;
}

export interface CompanyBalanceSheet {
    date: string;
    symbol: string;
    reportedCurrency: string;
    cik: string;
    fillingDate: string;
    acceptedDate: string;
    calendarYear: string;
    period: string;
    cashAndCashEquivalents: number;
    shortTermInvestments: number;
    cashAndShortTermInvestments: number;
    netReceivables: number;
    inventory: number;
    otherCurrentAssets: number;
    totalCurrentAssets: number;
    propertyPlantEquipmentNet: number;
    goodwill: number;
    intangibleAssets: number;
    goodwillAndIntangibleAssets: number;
    longTermInvestments: number;
    taxAssets: number;
    otherNonCurrentAssets: number;
    totalNonCurrentAssets: number;
    otherAssets: number;
    totalAssets: number;
    accountPayables: number;
    shortTermDebt: number;
    taxPayables: number;
    deferredRevenue: number;
    otherCurrentLiabilities: number;
    totalCurrentLiabilities: number;
    longTermDebt: number;
    deferredRevenueNonCurrent: number;
    deferredTaxLiabilitiesNonCurrent: number;
    otherNonCurrentLiabilities: number;
    totalNonCurrentLiabilities: number;
    otherLiabilities: number;
    capitalLeaseObligations: number;
    totalLiabilities: number;
    preferredStock: number;
    commonStock: number;
    retainedEarnings: number;
    accumulatedOtherComprehensiveIncomeLoss: number;
    othertotalStockholdersEquity: number;
    totalStockholdersEquity: number;
    totalEquity: number;
    totalLiabilitiesAndStockholdersEquity: number;
    minorityInterest: number;
    totalLiabilitiesAndTotalEquity: number;
    totalInvestments: number;
    totalDebt: number;
    netDebt: number;
    link: string;
    finalLink: string;
}

export interface CompanyCashFlow {
    date: string;
    symbol: string;
    reportedCurrency: string;
    cik: string;
    fillingDate: string;
    acceptedDate: string;
    calendarYear: string;
    period: string;
    netIncome: number;
    depreciationAndAmortization: number;
    deferredIncomeTax: number;
    stockBasedCompensation: number;
    changeInWorkingCapital: number;
    accountsReceivables: number;
    inventory: number;
    accountsPayables: number;
    otherWorkingCapital: number;
    otherNonCashItems: number;
    netCashProvidedByOperatingActivities: number;
    investmentsInPropertyPlantAndEquipment: number;
    acquisitionsNet: number;
    purchasesOfInvestments: number;
    salesMaturitiesOfInvestments: number;
    otherInvestingActivites: number;
    netCashUsedForInvestingActivites: number;
    debtRepayment: number;
    commonStockIssued: number;
    commonStockRepurchased: number;
    dividendsPaid: number;
    otherFinancingActivites: number;
    netCashUsedProvidedByFinancingActivities: number;
    effectOfForexChangesOnCash: number;
    netChangeInCash: number;
    cashAtEndOfPeriod: number;
    cashAtBeginningOfPeriod: number;
    operatingCashFlow: number;
    capitalExpenditure: number;
    freeCashFlow: number;
    link: string;
    finalLink: string;
}

export interface CompanyKeyMetrics {
    revenuePerShareTTM: number;
    netIncomePerShareTTM: number;
    operatingCashFlowPerShareTTM: number;
    freeCashFlowPerShareTTM: number;
    cashPerShareTTM: number;
    bookValuePerShareTTM: number;
    tangibleBookValuePerShareTTM: number;
    shareholdersEquityPerShareTTM: number;
    interestDebtPerShareTTM: number;
    marketCapTTM: number;
    enterpriseValueTTM: number;
    peRatioTTM: number;
    priceToSalesRatioTTM: number;
    pocfratioTTM: number;
    pfcfRatioTTM: number;
    pbRatioTTM: number;
    ptbRatioTTM: number;
    evToSalesTTM: number;
    enterpriseValueOverEBITDATTM: number;
    evToOperatingCashFlowTTM: number;
    evToFreeCashFlowTTM: number;
    earningsYieldTTM: number;
    freeCashFlowYieldTTM: number;
    debtToEquityTTM: number;
    debtToAssetsTTM: number;
    netDebtToEBITDATTM: number;
    currentRatioTTM: number;
    interestCoverageTTM: number;
    incomeQualityTTM: number;
    dividendYieldTTM: number;
    dividendYieldPercentageTTM: number;
    payoutRatioTTM: number;
    salesGeneralAndAdministrativeToRevenueTTM: number;
    researchAndDevelopementToRevenueTTM: number;
    intangiblesToTotalAssetsTTM: number;
    capexToOperatingCashFlowTTM: number;
    capexToRevenueTTM: number;
    capexToDepreciationTTM: number;
    stockBasedCompensationToRevenueTTM: number;
    grahamNumberTTM: number;
    roicTTM: number;
    returnOnTangibleAssetsTTM: number;
    grahamNetNetTTM: number;
    workingCapitalTTM: number;
    tangibleAssetValueTTM: number;
    netCurrentAssetValueTTM: number;
    investedCapitalTTM: number;
    averageReceivablesTTM: number;
    averagePayablesTTM: number;
    averageInventoryTTM: number;
    daysSalesOutstandingTTM: number;
    daysPayablesOutstandingTTM: number;
    daysOfInventoryOnHandTTM: number;
    receivablesTurnoverTTM: number;
    payablesTurnoverTTM: number;
    inventoryTurnoverTTM: number;
    roeTTM: number;
    capexPerShareTTM: number;
    dividendPerShareTTM: number;
    debtToMarketCapTTM: number;
}
export interface FinancialMetricsTTM {
    averageInventoryTTM: number;
    averagePayablesTTM: number;
    averageReceivablesTTM: number;
    capexToDepreciationTTM: number;
    capexToOperatingCashFlowTTM: number;
    capexToRevenueTTM: number;
    cashConversionCycleTTM: number;
    currentRatioTTM: number;
    daysOfInventoryOutstandingTTM: number;
    daysOfPayablesOutstandingTTM: number;
    daysOfSalesOutstandingTTM: number;
    earningsYieldTTM: number;
    enterpriseValueTTM: number;
    evToEBITDATTM: number;
    evToFreeCashFlowTTM: number;
    evToOperatingCashFlowTTM: number;
    evToSalesTTM: number;
    freeCashFlowToEquityTTM: number;
    freeCashFlowToFirmTTM: number;
    freeCashFlowYieldTTM: number;
    grahamNetNetTTM: number;
    grahamNumberTTM: number;
    incomeQualityTTM: number;
    intangiblesToTotalAssetsTTM: number;
    interestBurdenTTM: number;
    investedCapitalTTM: number;
    marketCapTTM: number;
    netCurrentAssetValueTTM: number;
    netDebtToEBITDATTM: number;
    operatingCycleTTM: number;
    operatingReturnOnAssetsTTM: number;
    researchAndDevelopementToRevenueTTM: number;
    returnOnAssetsTTM: number;
    returnOnCapitalEmployedTTM: number;
    returnOnEquityTTM: number;
    returnOnInvestedCapitalTTM: number;
    returnOnTangibleAssetsTTM: number;
    salesGeneralAndAdministrativeToRevenueTTM: number;
    stockBasedCompensationToRevenueTTM: number;
    symbol: string;
    tangibleAssetValueTTM: number;
    taxBurdenTTM: number;
    workingCapitalTTM: number;
}
export interface CompanyHistoricalDividend {
    symbol: string;
    historical: Dividend[];
}

export interface Dividend {
    symbol:string;
    date: string;
    adjDividend: number;
    dividend: number;
    recordDate: string;
    paymentDate: string;
    declarationDate: string;
    yield:number;
    frequency:string
}

export interface CompanyCompData {
    // symbol: string;
    // peersList: string[];
    symbol: string;
    companyName: string;
    price: number;
    mktCap: number;
}

export interface CompanyTenK {
    symbol: string;
    filingDate: string;
    acceptedDate: string;
    cik: string;
    type: string;
    link: string;
    finalLink: string;
    formType:string
}

export interface Dfc{
    symbol: string;
    date: string;
    dfc: number;
    stockPrice: number;
}

export interface AreaData {
    time: string;
    value: number;
}

export interface CandlestickData {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

export interface StockNews{
    symbol: string;
    publishedDate:string;
    publisher:string;
    title:string;
    image:string;
    site:string;
    text:string;
    url:string;
    
}
export interface GradeConsensus{
    symbol:string;
    strongBuy:number;
    buy:number;
    hold:number;
    sell:number;
    strongSell:number;
    consensus:string;
}

export interface GradeHistory {
    symbol: string;
    date: string;
    analystRatingsStrongBuy:number;
    analystRatingsBuy:number;
    analystRatingsHold:number;
    analystRatingsSell:number;
    analystRatingsStrongSell:number;
}

export interface Earnings{
    symbol:string;
    date:string;
    epsActual:number;
    epsEstimated:number;
    revenueActual:number;
    revenueEstimated:number;
    lastUpdated:number
}
