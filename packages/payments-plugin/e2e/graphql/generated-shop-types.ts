/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
    JSON: any;
    Money: number;
    Upload: any;
};

export type ActiveOrderResult = NoActiveOrderError | Order;

export type AddPaymentToOrderResult =
    | IneligiblePaymentMethodError
    | NoActiveOrderError
    | Order
    | OrderPaymentStateError
    | OrderStateTransitionError
    | PaymentDeclinedError
    | PaymentFailedError;

export type Address = Node & {
    city?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    country: Country;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    defaultBillingAddress?: Maybe<Scalars['Boolean']>;
    defaultShippingAddress?: Maybe<Scalars['Boolean']>;
    fullName?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    phoneNumber?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    streetLine1: Scalars['String'];
    streetLine2?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};

export type Adjustment = {
    adjustmentSource: Scalars['String'];
    amount: Scalars['Money'];
    data?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    type: AdjustmentType;
};

export enum AdjustmentType {
    DISTRIBUTED_ORDER_PROMOTION = 'DISTRIBUTED_ORDER_PROMOTION',
    OTHER = 'OTHER',
    PROMOTION = 'PROMOTION',
}

/** Returned when attempting to set the Customer for an Order when already logged in. */
export type AlreadyLoggedInError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type ApplyCouponCodeResult =
    | CouponCodeExpiredError
    | CouponCodeInvalidError
    | CouponCodeLimitError
    | Order;

export type Asset = Node & {
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    fileSize: Scalars['Int'];
    focalPoint?: Maybe<Coordinate>;
    height: Scalars['Int'];
    id: Scalars['ID'];
    mimeType: Scalars['String'];
    name: Scalars['String'];
    preview: Scalars['String'];
    source: Scalars['String'];
    tags: Array<Tag>;
    type: AssetType;
    updatedAt: Scalars['DateTime'];
    width: Scalars['Int'];
};

export type AssetList = PaginatedList & {
    items: Array<Asset>;
    totalItems: Scalars['Int'];
};

export enum AssetType {
    BINARY = 'BINARY',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
}

export type AuthenticationInput = {
    native?: InputMaybe<NativeAuthInput>;
};

export type AuthenticationMethod = Node & {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    strategy: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError;

export type BooleanCustomFieldConfig = CustomField & {
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

/** Operators for filtering on a list of Boolean fields */
export type BooleanListOperators = {
    inList: Scalars['Boolean'];
};

/** Operators for filtering on a Boolean field */
export type BooleanOperators = {
    eq?: InputMaybe<Scalars['Boolean']>;
    isNull?: InputMaybe<Scalars['Boolean']>;
};

export type Channel = Node & {
    availableCurrencyCodes: Array<CurrencyCode>;
    availableLanguageCodes?: Maybe<Array<LanguageCode>>;
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    /** @deprecated Use defaultCurrencyCode instead */
    currencyCode: CurrencyCode;
    customFields?: Maybe<Scalars['JSON']>;
    defaultCurrencyCode: CurrencyCode;
    defaultLanguageCode: LanguageCode;
    defaultShippingZone?: Maybe<Zone>;
    defaultTaxZone?: Maybe<Zone>;
    id: Scalars['ID'];
    /** Not yet used - will be implemented in a future release. */
    outOfStockThreshold?: Maybe<Scalars['Int']>;
    pricesIncludeTax: Scalars['Boolean'];
    seller?: Maybe<Seller>;
    token: Scalars['String'];
    /** Not yet used - will be implemented in a future release. */
    trackInventory?: Maybe<Scalars['Boolean']>;
    updatedAt: Scalars['DateTime'];
};

export type Collection = Node & {
    assets: Array<Asset>;
    breadcrumbs: Array<CollectionBreadcrumb>;
    children?: Maybe<Array<Collection>>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    featuredAsset?: Maybe<Asset>;
    filters: Array<ConfigurableOperation>;
    id: Scalars['ID'];
    languageCode?: Maybe<LanguageCode>;
    name: Scalars['String'];
    parent?: Maybe<Collection>;
    parentId: Scalars['ID'];
    position: Scalars['Int'];
    productVariants: ProductVariantList;
    slug: Scalars['String'];
    translations: Array<CollectionTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type CollectionProductVariantsArgs = {
    options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
    id: Scalars['ID'];
    name: Scalars['String'];
    slug: Scalars['String'];
};

export type CollectionFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    parentId?: InputMaybe<IdOperators>;
    position?: InputMaybe<NumberOperators>;
    slug?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type CollectionList = PaginatedList & {
    items: Array<Collection>;
    totalItems: Scalars['Int'];
};

export type CollectionListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<CollectionFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<CollectionSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
    topLevelOnly?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export type CollectionResult = {
    collection: Collection;
    count: Scalars['Int'];
};

export type CollectionSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    parentId?: InputMaybe<SortOrder>;
    position?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionTranslation = {
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type ConfigArg = {
    name: Scalars['String'];
    value: Scalars['String'];
};

export type ConfigArgDefinition = {
    defaultValue?: Maybe<Scalars['JSON']>;
    description?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    required: Scalars['Boolean'];
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type ConfigArgInput = {
    name: Scalars['String'];
    /** A JSON stringified representation of the actual value */
    value: Scalars['String'];
};

export type ConfigurableOperation = {
    args: Array<ConfigArg>;
    code: Scalars['String'];
};

export type ConfigurableOperationDefinition = {
    args: Array<ConfigArgDefinition>;
    code: Scalars['String'];
    description: Scalars['String'];
};

export type ConfigurableOperationInput = {
    arguments: Array<ConfigArgInput>;
    code: Scalars['String'];
};

export type Coordinate = {
    x: Scalars['Float'];
    y: Scalars['Float'];
};

export type Country = Node &
    Region & {
        code: Scalars['String'];
        createdAt: Scalars['DateTime'];
        customFields?: Maybe<Scalars['JSON']>;
        enabled: Scalars['Boolean'];
        id: Scalars['ID'];
        languageCode: LanguageCode;
        name: Scalars['String'];
        parent?: Maybe<Region>;
        parentId?: Maybe<Scalars['ID']>;
        translations: Array<RegionTranslation>;
        type: Scalars['String'];
        updatedAt: Scalars['DateTime'];
    };

export type CountryList = PaginatedList & {
    items: Array<Country>;
    totalItems: Scalars['Int'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
    couponCode: Scalars['String'];
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
    couponCode: Scalars['String'];
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
    couponCode: Scalars['String'];
    errorCode: ErrorCode;
    limit: Scalars['Int'];
    message: Scalars['String'];
};

export type CreateAddressInput = {
    city?: InputMaybe<Scalars['String']>;
    company?: InputMaybe<Scalars['String']>;
    countryCode: Scalars['String'];
    customFields?: InputMaybe<Scalars['JSON']>;
    defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
    defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
    fullName?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    postalCode?: InputMaybe<Scalars['String']>;
    province?: InputMaybe<Scalars['String']>;
    streetLine1: Scalars['String'];
    streetLine2?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    emailAddress: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    phoneNumber?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export enum CurrencyCode {
    /** United Arab Emirates dirham */
    AED = 'AED',
    /** Afghan afghani */
    AFN = 'AFN',
    /** Albanian lek */
    ALL = 'ALL',
    /** Armenian dram */
    AMD = 'AMD',
    /** Netherlands Antillean guilder */
    ANG = 'ANG',
    /** Angolan kwanza */
    AOA = 'AOA',
    /** Argentine peso */
    ARS = 'ARS',
    /** Australian dollar */
    AUD = 'AUD',
    /** Aruban florin */
    AWG = 'AWG',
    /** Azerbaijani manat */
    AZN = 'AZN',
    /** Bosnia and Herzegovina convertible mark */
    BAM = 'BAM',
    /** Barbados dollar */
    BBD = 'BBD',
    /** Bangladeshi taka */
    BDT = 'BDT',
    /** Bulgarian lev */
    BGN = 'BGN',
    /** Bahraini dinar */
    BHD = 'BHD',
    /** Burundian franc */
    BIF = 'BIF',
    /** Bermudian dollar */
    BMD = 'BMD',
    /** Brunei dollar */
    BND = 'BND',
    /** Boliviano */
    BOB = 'BOB',
    /** Brazilian real */
    BRL = 'BRL',
    /** Bahamian dollar */
    BSD = 'BSD',
    /** Bhutanese ngultrum */
    BTN = 'BTN',
    /** Botswana pula */
    BWP = 'BWP',
    /** Belarusian ruble */
    BYN = 'BYN',
    /** Belize dollar */
    BZD = 'BZD',
    /** Canadian dollar */
    CAD = 'CAD',
    /** Congolese franc */
    CDF = 'CDF',
    /** Swiss franc */
    CHF = 'CHF',
    /** Chilean peso */
    CLP = 'CLP',
    /** Renminbi (Chinese) yuan */
    CNY = 'CNY',
    /** Colombian peso */
    COP = 'COP',
    /** Costa Rican colon */
    CRC = 'CRC',
    /** Cuban convertible peso */
    CUC = 'CUC',
    /** Cuban peso */
    CUP = 'CUP',
    /** Cape Verde escudo */
    CVE = 'CVE',
    /** Czech koruna */
    CZK = 'CZK',
    /** Djiboutian franc */
    DJF = 'DJF',
    /** Danish krone */
    DKK = 'DKK',
    /** Dominican peso */
    DOP = 'DOP',
    /** Algerian dinar */
    DZD = 'DZD',
    /** Egyptian pound */
    EGP = 'EGP',
    /** Eritrean nakfa */
    ERN = 'ERN',
    /** Ethiopian birr */
    ETB = 'ETB',
    /** Euro */
    EUR = 'EUR',
    /** Fiji dollar */
    FJD = 'FJD',
    /** Falkland Islands pound */
    FKP = 'FKP',
    /** Pound sterling */
    GBP = 'GBP',
    /** Georgian lari */
    GEL = 'GEL',
    /** Ghanaian cedi */
    GHS = 'GHS',
    /** Gibraltar pound */
    GIP = 'GIP',
    /** Gambian dalasi */
    GMD = 'GMD',
    /** Guinean franc */
    GNF = 'GNF',
    /** Guatemalan quetzal */
    GTQ = 'GTQ',
    /** Guyanese dollar */
    GYD = 'GYD',
    /** Hong Kong dollar */
    HKD = 'HKD',
    /** Honduran lempira */
    HNL = 'HNL',
    /** Croatian kuna */
    HRK = 'HRK',
    /** Haitian gourde */
    HTG = 'HTG',
    /** Hungarian forint */
    HUF = 'HUF',
    /** Indonesian rupiah */
    IDR = 'IDR',
    /** Israeli new shekel */
    ILS = 'ILS',
    /** Indian rupee */
    INR = 'INR',
    /** Iraqi dinar */
    IQD = 'IQD',
    /** Iranian rial */
    IRR = 'IRR',
    /** Icelandic króna */
    ISK = 'ISK',
    /** Jamaican dollar */
    JMD = 'JMD',
    /** Jordanian dinar */
    JOD = 'JOD',
    /** Japanese yen */
    JPY = 'JPY',
    /** Kenyan shilling */
    KES = 'KES',
    /** Kyrgyzstani som */
    KGS = 'KGS',
    /** Cambodian riel */
    KHR = 'KHR',
    /** Comoro franc */
    KMF = 'KMF',
    /** North Korean won */
    KPW = 'KPW',
    /** South Korean won */
    KRW = 'KRW',
    /** Kuwaiti dinar */
    KWD = 'KWD',
    /** Cayman Islands dollar */
    KYD = 'KYD',
    /** Kazakhstani tenge */
    KZT = 'KZT',
    /** Lao kip */
    LAK = 'LAK',
    /** Lebanese pound */
    LBP = 'LBP',
    /** Sri Lankan rupee */
    LKR = 'LKR',
    /** Liberian dollar */
    LRD = 'LRD',
    /** Lesotho loti */
    LSL = 'LSL',
    /** Libyan dinar */
    LYD = 'LYD',
    /** Moroccan dirham */
    MAD = 'MAD',
    /** Moldovan leu */
    MDL = 'MDL',
    /** Malagasy ariary */
    MGA = 'MGA',
    /** Macedonian denar */
    MKD = 'MKD',
    /** Myanmar kyat */
    MMK = 'MMK',
    /** Mongolian tögrög */
    MNT = 'MNT',
    /** Macanese pataca */
    MOP = 'MOP',
    /** Mauritanian ouguiya */
    MRU = 'MRU',
    /** Mauritian rupee */
    MUR = 'MUR',
    /** Maldivian rufiyaa */
    MVR = 'MVR',
    /** Malawian kwacha */
    MWK = 'MWK',
    /** Mexican peso */
    MXN = 'MXN',
    /** Malaysian ringgit */
    MYR = 'MYR',
    /** Mozambican metical */
    MZN = 'MZN',
    /** Namibian dollar */
    NAD = 'NAD',
    /** Nigerian naira */
    NGN = 'NGN',
    /** Nicaraguan córdoba */
    NIO = 'NIO',
    /** Norwegian krone */
    NOK = 'NOK',
    /** Nepalese rupee */
    NPR = 'NPR',
    /** New Zealand dollar */
    NZD = 'NZD',
    /** Omani rial */
    OMR = 'OMR',
    /** Panamanian balboa */
    PAB = 'PAB',
    /** Peruvian sol */
    PEN = 'PEN',
    /** Papua New Guinean kina */
    PGK = 'PGK',
    /** Philippine peso */
    PHP = 'PHP',
    /** Pakistani rupee */
    PKR = 'PKR',
    /** Polish złoty */
    PLN = 'PLN',
    /** Paraguayan guaraní */
    PYG = 'PYG',
    /** Qatari riyal */
    QAR = 'QAR',
    /** Romanian leu */
    RON = 'RON',
    /** Serbian dinar */
    RSD = 'RSD',
    /** Russian ruble */
    RUB = 'RUB',
    /** Rwandan franc */
    RWF = 'RWF',
    /** Saudi riyal */
    SAR = 'SAR',
    /** Solomon Islands dollar */
    SBD = 'SBD',
    /** Seychelles rupee */
    SCR = 'SCR',
    /** Sudanese pound */
    SDG = 'SDG',
    /** Swedish krona/kronor */
    SEK = 'SEK',
    /** Singapore dollar */
    SGD = 'SGD',
    /** Saint Helena pound */
    SHP = 'SHP',
    /** Sierra Leonean leone */
    SLL = 'SLL',
    /** Somali shilling */
    SOS = 'SOS',
    /** Surinamese dollar */
    SRD = 'SRD',
    /** South Sudanese pound */
    SSP = 'SSP',
    /** São Tomé and Príncipe dobra */
    STN = 'STN',
    /** Salvadoran colón */
    SVC = 'SVC',
    /** Syrian pound */
    SYP = 'SYP',
    /** Swazi lilangeni */
    SZL = 'SZL',
    /** Thai baht */
    THB = 'THB',
    /** Tajikistani somoni */
    TJS = 'TJS',
    /** Turkmenistan manat */
    TMT = 'TMT',
    /** Tunisian dinar */
    TND = 'TND',
    /** Tongan paʻanga */
    TOP = 'TOP',
    /** Turkish lira */
    TRY = 'TRY',
    /** Trinidad and Tobago dollar */
    TTD = 'TTD',
    /** New Taiwan dollar */
    TWD = 'TWD',
    /** Tanzanian shilling */
    TZS = 'TZS',
    /** Ukrainian hryvnia */
    UAH = 'UAH',
    /** Ugandan shilling */
    UGX = 'UGX',
    /** United States dollar */
    USD = 'USD',
    /** Uruguayan peso */
    UYU = 'UYU',
    /** Uzbekistan som */
    UZS = 'UZS',
    /** Venezuelan bolívar soberano */
    VES = 'VES',
    /** Vietnamese đồng */
    VND = 'VND',
    /** Vanuatu vatu */
    VUV = 'VUV',
    /** Samoan tala */
    WST = 'WST',
    /** CFA franc BEAC */
    XAF = 'XAF',
    /** East Caribbean dollar */
    XCD = 'XCD',
    /** CFA franc BCEAO */
    XOF = 'XOF',
    /** CFP franc (franc Pacifique) */
    XPF = 'XPF',
    /** Yemeni rial */
    YER = 'YER',
    /** South African rand */
    ZAR = 'ZAR',
    /** Zambian kwacha */
    ZMW = 'ZMW',
    /** Zimbabwean dollar */
    ZWL = 'ZWL',
}

export type CurrentUser = {
    channels: Array<CurrentUserChannel>;
    id: Scalars['ID'];
    identifier: Scalars['String'];
};

export type CurrentUserChannel = {
    code: Scalars['String'];
    id: Scalars['ID'];
    permissions: Array<Permission>;
    token: Scalars['String'];
};

export type CustomField = {
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type CustomFieldConfig =
    | BooleanCustomFieldConfig
    | DateTimeCustomFieldConfig
    | FloatCustomFieldConfig
    | IntCustomFieldConfig
    | LocaleStringCustomFieldConfig
    | LocaleTextCustomFieldConfig
    | RelationCustomFieldConfig
    | StringCustomFieldConfig
    | TextCustomFieldConfig;

export type Customer = Node & {
    addresses?: Maybe<Array<Address>>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    emailAddress: Scalars['String'];
    firstName: Scalars['String'];
    id: Scalars['ID'];
    lastName: Scalars['String'];
    orders: OrderList;
    phoneNumber?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
    user?: Maybe<User>;
};

export type CustomerOrdersArgs = {
    options?: InputMaybe<OrderListOptions>;
};

export type CustomerFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    emailAddress?: InputMaybe<StringOperators>;
    firstName?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    lastName?: InputMaybe<StringOperators>;
    phoneNumber?: InputMaybe<StringOperators>;
    title?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroup = Node & {
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    customers: CustomerList;
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type CustomerGroupCustomersArgs = {
    options?: InputMaybe<CustomerListOptions>;
};

export type CustomerList = PaginatedList & {
    items: Array<Customer>;
    totalItems: Scalars['Int'];
};

export type CustomerListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<CustomerFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<CustomerSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

export type CustomerSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    emailAddress?: InputMaybe<SortOrder>;
    firstName?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    lastName?: InputMaybe<SortOrder>;
    phoneNumber?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

/** Operators for filtering on a list of Date fields */
export type DateListOperators = {
    inList: Scalars['DateTime'];
};

/** Operators for filtering on a DateTime field */
export type DateOperators = {
    after?: InputMaybe<Scalars['DateTime']>;
    before?: InputMaybe<Scalars['DateTime']>;
    between?: InputMaybe<DateRange>;
    eq?: InputMaybe<Scalars['DateTime']>;
    isNull?: InputMaybe<Scalars['Boolean']>;
};

export type DateRange = {
    end: Scalars['DateTime'];
    start: Scalars['DateTime'];
};

/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    max?: Maybe<Scalars['String']>;
    min?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    step?: Maybe<Scalars['Int']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type DeletionResponse = {
    message?: Maybe<Scalars['String']>;
    result: DeletionResult;
};

export enum DeletionResult {
    /** The entity was successfully deleted */
    DELETED = 'DELETED',
    /** Deletion did not take place, reason given in message */
    NOT_DELETED = 'NOT_DELETED',
}

export type Discount = {
    adjustmentSource: Scalars['String'];
    amount: Scalars['Money'];
    amountWithTax: Scalars['Money'];
    description: Scalars['String'];
    type: AdjustmentType;
};

/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export enum ErrorCode {
    ALREADY_LOGGED_IN_ERROR = 'ALREADY_LOGGED_IN_ERROR',
    COUPON_CODE_EXPIRED_ERROR = 'COUPON_CODE_EXPIRED_ERROR',
    COUPON_CODE_INVALID_ERROR = 'COUPON_CODE_INVALID_ERROR',
    COUPON_CODE_LIMIT_ERROR = 'COUPON_CODE_LIMIT_ERROR',
    EMAIL_ADDRESS_CONFLICT_ERROR = 'EMAIL_ADDRESS_CONFLICT_ERROR',
    GUEST_CHECKOUT_ERROR = 'GUEST_CHECKOUT_ERROR',
    IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
    IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
    INELIGIBLE_PAYMENT_METHOD_ERROR = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
    INELIGIBLE_SHIPPING_METHOD_ERROR = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
    INSUFFICIENT_STOCK_ERROR = 'INSUFFICIENT_STOCK_ERROR',
    INVALID_CREDENTIALS_ERROR = 'INVALID_CREDENTIALS_ERROR',
    MISSING_PASSWORD_ERROR = 'MISSING_PASSWORD_ERROR',
    NATIVE_AUTH_STRATEGY_ERROR = 'NATIVE_AUTH_STRATEGY_ERROR',
    NEGATIVE_QUANTITY_ERROR = 'NEGATIVE_QUANTITY_ERROR',
    NOT_VERIFIED_ERROR = 'NOT_VERIFIED_ERROR',
    NO_ACTIVE_ORDER_ERROR = 'NO_ACTIVE_ORDER_ERROR',
    ORDER_LIMIT_ERROR = 'ORDER_LIMIT_ERROR',
    ORDER_MODIFICATION_ERROR = 'ORDER_MODIFICATION_ERROR',
    ORDER_PAYMENT_STATE_ERROR = 'ORDER_PAYMENT_STATE_ERROR',
    ORDER_STATE_TRANSITION_ERROR = 'ORDER_STATE_TRANSITION_ERROR',
    PASSWORD_ALREADY_SET_ERROR = 'PASSWORD_ALREADY_SET_ERROR',
    PASSWORD_RESET_TOKEN_EXPIRED_ERROR = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
    PASSWORD_RESET_TOKEN_INVALID_ERROR = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
    PASSWORD_VALIDATION_ERROR = 'PASSWORD_VALIDATION_ERROR',
    PAYMENT_DECLINED_ERROR = 'PAYMENT_DECLINED_ERROR',
    PAYMENT_FAILED_ERROR = 'PAYMENT_FAILED_ERROR',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    VERIFICATION_TOKEN_EXPIRED_ERROR = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
    VERIFICATION_TOKEN_INVALID_ERROR = 'VERIFICATION_TOKEN_INVALID_ERROR',
}

export type ErrorResult = {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type Facet = Node & {
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<FacetTranslation>;
    updatedAt: Scalars['DateTime'];
    values: Array<FacetValue>;
};

export type FacetFilterParameter = {
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type FacetList = PaginatedList & {
    items: Array<Facet>;
    totalItems: Scalars['Int'];
};

export type FacetListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<FacetFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<FacetSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

export type FacetSortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export type FacetTranslation = {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type FacetValue = Node & {
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    facet: Facet;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<FacetValueTranslation>;
    updatedAt: Scalars['DateTime'];
};

/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export type FacetValueFilterInput = {
    and?: InputMaybe<Scalars['ID']>;
    or?: InputMaybe<Array<Scalars['ID']>>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
    count: Scalars['Int'];
    facetValue: FacetValue;
};

export type FacetValueTranslation = {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type FloatCustomFieldConfig = CustomField & {
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    max?: Maybe<Scalars['Float']>;
    min?: Maybe<Scalars['Float']>;
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    step?: Maybe<Scalars['Float']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type Fulfillment = Node & {
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    lines: Array<FulfillmentLine>;
    method: Scalars['String'];
    state: Scalars['String'];
    /** @deprecated Use the `lines` field instead */
    summary: Array<FulfillmentLine>;
    trackingCode?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};

export type FulfillmentLine = {
    fulfillment: Fulfillment;
    fulfillmentId: Scalars['ID'];
    orderLine: OrderLine;
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
};

export enum GlobalFlag {
    FALSE = 'FALSE',
    INHERIT = 'INHERIT',
    TRUE = 'TRUE',
}

/** Returned when attempting to set the Customer on a guest checkout when the configured GuestCheckoutStrategy does not allow it. */
export type GuestCheckoutError = ErrorResult & {
    errorCode: ErrorCode;
    errorDetail: Scalars['String'];
    message: Scalars['String'];
};

export type HistoryEntry = Node & {
    createdAt: Scalars['DateTime'];
    data: Scalars['JSON'];
    id: Scalars['ID'];
    type: HistoryEntryType;
    updatedAt: Scalars['DateTime'];
};

export type HistoryEntryFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    type?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type HistoryEntryList = PaginatedList & {
    items: Array<HistoryEntry>;
    totalItems: Scalars['Int'];
};

export type HistoryEntryListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<HistoryEntryFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<HistoryEntrySortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

export type HistoryEntrySortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export enum HistoryEntryType {
    CUSTOMER_ADDED_TO_GROUP = 'CUSTOMER_ADDED_TO_GROUP',
    CUSTOMER_ADDRESS_CREATED = 'CUSTOMER_ADDRESS_CREATED',
    CUSTOMER_ADDRESS_DELETED = 'CUSTOMER_ADDRESS_DELETED',
    CUSTOMER_ADDRESS_UPDATED = 'CUSTOMER_ADDRESS_UPDATED',
    CUSTOMER_DETAIL_UPDATED = 'CUSTOMER_DETAIL_UPDATED',
    CUSTOMER_EMAIL_UPDATE_REQUESTED = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
    CUSTOMER_EMAIL_UPDATE_VERIFIED = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
    CUSTOMER_NOTE = 'CUSTOMER_NOTE',
    CUSTOMER_PASSWORD_RESET_REQUESTED = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
    CUSTOMER_PASSWORD_RESET_VERIFIED = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
    CUSTOMER_PASSWORD_UPDATED = 'CUSTOMER_PASSWORD_UPDATED',
    CUSTOMER_REGISTERED = 'CUSTOMER_REGISTERED',
    CUSTOMER_REMOVED_FROM_GROUP = 'CUSTOMER_REMOVED_FROM_GROUP',
    CUSTOMER_VERIFIED = 'CUSTOMER_VERIFIED',
    ORDER_CANCELLATION = 'ORDER_CANCELLATION',
    ORDER_COUPON_APPLIED = 'ORDER_COUPON_APPLIED',
    ORDER_COUPON_REMOVED = 'ORDER_COUPON_REMOVED',
    ORDER_FULFILLMENT = 'ORDER_FULFILLMENT',
    ORDER_FULFILLMENT_TRANSITION = 'ORDER_FULFILLMENT_TRANSITION',
    ORDER_MODIFIED = 'ORDER_MODIFIED',
    ORDER_NOTE = 'ORDER_NOTE',
    ORDER_PAYMENT_TRANSITION = 'ORDER_PAYMENT_TRANSITION',
    ORDER_REFUND_TRANSITION = 'ORDER_REFUND_TRANSITION',
    ORDER_STATE_TRANSITION = 'ORDER_STATE_TRANSITION',
}

/** Operators for filtering on a list of ID fields */
export type IdListOperators = {
    inList: Scalars['ID'];
};

/** Operators for filtering on an ID field */
export type IdOperators = {
    eq?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    isNull?: InputMaybe<Scalars['Boolean']>;
    notEq?: InputMaybe<Scalars['String']>;
    notIn?: InputMaybe<Array<Scalars['String']>>;
};

/**
 * Returned if the token used to change a Customer's email address is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type IdentifierChangeTokenExpiredError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned if the token used to change a Customer's email address is either
 * invalid or does not match any expected tokens.
 */
export type IdentifierChangeTokenInvalidError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned when attempting to add a Payment using a PaymentMethod for which the Order is not eligible. */
export type IneligiblePaymentMethodError = ErrorResult & {
    eligibilityCheckerMessage?: Maybe<Scalars['String']>;
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
    order: Order;
    quantityAvailable: Scalars['Int'];
};

export type IntCustomFieldConfig = CustomField & {
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    step?: Maybe<Scalars['Int']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
    authenticationError: Scalars['String'];
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export enum LanguageCode {
    /** Afrikaans */
    af = 'af',
    /** Akan */
    ak = 'ak',
    /** Amharic */
    am = 'am',
    /** Arabic */
    ar = 'ar',
    /** Assamese */
    as = 'as',
    /** Azerbaijani */
    az = 'az',
    /** Belarusian */
    be = 'be',
    /** Bulgarian */
    bg = 'bg',
    /** Bambara */
    bm = 'bm',
    /** Bangla */
    bn = 'bn',
    /** Tibetan */
    bo = 'bo',
    /** Breton */
    br = 'br',
    /** Bosnian */
    bs = 'bs',
    /** Catalan */
    ca = 'ca',
    /** Chechen */
    ce = 'ce',
    /** Corsican */
    co = 'co',
    /** Czech */
    cs = 'cs',
    /** Church Slavic */
    cu = 'cu',
    /** Welsh */
    cy = 'cy',
    /** Danish */
    da = 'da',
    /** German */
    de = 'de',
    /** Austrian German */
    de_AT = 'de_AT',
    /** Swiss High German */
    de_CH = 'de_CH',
    /** Dzongkha */
    dz = 'dz',
    /** Ewe */
    ee = 'ee',
    /** Greek */
    el = 'el',
    /** English */
    en = 'en',
    /** Australian English */
    en_AU = 'en_AU',
    /** Canadian English */
    en_CA = 'en_CA',
    /** British English */
    en_GB = 'en_GB',
    /** American English */
    en_US = 'en_US',
    /** Esperanto */
    eo = 'eo',
    /** Spanish */
    es = 'es',
    /** European Spanish */
    es_ES = 'es_ES',
    /** Mexican Spanish */
    es_MX = 'es_MX',
    /** Estonian */
    et = 'et',
    /** Basque */
    eu = 'eu',
    /** Persian */
    fa = 'fa',
    /** Dari */
    fa_AF = 'fa_AF',
    /** Fulah */
    ff = 'ff',
    /** Finnish */
    fi = 'fi',
    /** Faroese */
    fo = 'fo',
    /** French */
    fr = 'fr',
    /** Canadian French */
    fr_CA = 'fr_CA',
    /** Swiss French */
    fr_CH = 'fr_CH',
    /** Western Frisian */
    fy = 'fy',
    /** Irish */
    ga = 'ga',
    /** Scottish Gaelic */
    gd = 'gd',
    /** Galician */
    gl = 'gl',
    /** Gujarati */
    gu = 'gu',
    /** Manx */
    gv = 'gv',
    /** Hausa */
    ha = 'ha',
    /** Hebrew */
    he = 'he',
    /** Hindi */
    hi = 'hi',
    /** Croatian */
    hr = 'hr',
    /** Haitian Creole */
    ht = 'ht',
    /** Hungarian */
    hu = 'hu',
    /** Armenian */
    hy = 'hy',
    /** Interlingua */
    ia = 'ia',
    /** Indonesian */
    id = 'id',
    /** Igbo */
    ig = 'ig',
    /** Sichuan Yi */
    ii = 'ii',
    /** Icelandic */
    is = 'is',
    /** Italian */
    it = 'it',
    /** Japanese */
    ja = 'ja',
    /** Javanese */
    jv = 'jv',
    /** Georgian */
    ka = 'ka',
    /** Kikuyu */
    ki = 'ki',
    /** Kazakh */
    kk = 'kk',
    /** Kalaallisut */
    kl = 'kl',
    /** Khmer */
    km = 'km',
    /** Kannada */
    kn = 'kn',
    /** Korean */
    ko = 'ko',
    /** Kashmiri */
    ks = 'ks',
    /** Kurdish */
    ku = 'ku',
    /** Cornish */
    kw = 'kw',
    /** Kyrgyz */
    ky = 'ky',
    /** Latin */
    la = 'la',
    /** Luxembourgish */
    lb = 'lb',
    /** Ganda */
    lg = 'lg',
    /** Lingala */
    ln = 'ln',
    /** Lao */
    lo = 'lo',
    /** Lithuanian */
    lt = 'lt',
    /** Luba-Katanga */
    lu = 'lu',
    /** Latvian */
    lv = 'lv',
    /** Malagasy */
    mg = 'mg',
    /** Maori */
    mi = 'mi',
    /** Macedonian */
    mk = 'mk',
    /** Malayalam */
    ml = 'ml',
    /** Mongolian */
    mn = 'mn',
    /** Marathi */
    mr = 'mr',
    /** Malay */
    ms = 'ms',
    /** Maltese */
    mt = 'mt',
    /** Burmese */
    my = 'my',
    /** Norwegian Bokmål */
    nb = 'nb',
    /** North Ndebele */
    nd = 'nd',
    /** Nepali */
    ne = 'ne',
    /** Dutch */
    nl = 'nl',
    /** Flemish */
    nl_BE = 'nl_BE',
    /** Norwegian Nynorsk */
    nn = 'nn',
    /** Nyanja */
    ny = 'ny',
    /** Oromo */
    om = 'om',
    /** Odia */
    or = 'or',
    /** Ossetic */
    os = 'os',
    /** Punjabi */
    pa = 'pa',
    /** Polish */
    pl = 'pl',
    /** Pashto */
    ps = 'ps',
    /** Portuguese */
    pt = 'pt',
    /** Brazilian Portuguese */
    pt_BR = 'pt_BR',
    /** European Portuguese */
    pt_PT = 'pt_PT',
    /** Quechua */
    qu = 'qu',
    /** Romansh */
    rm = 'rm',
    /** Rundi */
    rn = 'rn',
    /** Romanian */
    ro = 'ro',
    /** Moldavian */
    ro_MD = 'ro_MD',
    /** Russian */
    ru = 'ru',
    /** Kinyarwanda */
    rw = 'rw',
    /** Sanskrit */
    sa = 'sa',
    /** Sindhi */
    sd = 'sd',
    /** Northern Sami */
    se = 'se',
    /** Sango */
    sg = 'sg',
    /** Sinhala */
    si = 'si',
    /** Slovak */
    sk = 'sk',
    /** Slovenian */
    sl = 'sl',
    /** Samoan */
    sm = 'sm',
    /** Shona */
    sn = 'sn',
    /** Somali */
    so = 'so',
    /** Albanian */
    sq = 'sq',
    /** Serbian */
    sr = 'sr',
    /** Southern Sotho */
    st = 'st',
    /** Sundanese */
    su = 'su',
    /** Swedish */
    sv = 'sv',
    /** Swahili */
    sw = 'sw',
    /** Congo Swahili */
    sw_CD = 'sw_CD',
    /** Tamil */
    ta = 'ta',
    /** Telugu */
    te = 'te',
    /** Tajik */
    tg = 'tg',
    /** Thai */
    th = 'th',
    /** Tigrinya */
    ti = 'ti',
    /** Turkmen */
    tk = 'tk',
    /** Tongan */
    to = 'to',
    /** Turkish */
    tr = 'tr',
    /** Tatar */
    tt = 'tt',
    /** Uyghur */
    ug = 'ug',
    /** Ukrainian */
    uk = 'uk',
    /** Urdu */
    ur = 'ur',
    /** Uzbek */
    uz = 'uz',
    /** Vietnamese */
    vi = 'vi',
    /** Volapük */
    vo = 'vo',
    /** Wolof */
    wo = 'wo',
    /** Xhosa */
    xh = 'xh',
    /** Yiddish */
    yi = 'yi',
    /** Yoruba */
    yo = 'yo',
    /** Chinese */
    zh = 'zh',
    /** Simplified Chinese */
    zh_Hans = 'zh_Hans',
    /** Traditional Chinese */
    zh_Hant = 'zh_Hant',
    /** Zulu */
    zu = 'zu',
}

export type LocaleStringCustomFieldConfig = CustomField & {
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    length?: Maybe<Scalars['Int']>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    pattern?: Maybe<Scalars['String']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type LocaleTextCustomFieldConfig = CustomField & {
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type LocalizedString = {
    languageCode: LanguageCode;
    value: Scalars['String'];
};

export enum LogicalOperator {
    AND = 'AND',
    OR = 'OR',
}

/** Returned when attempting to register or verify a customer account without a password, when one is required. */
export type MissingPasswordError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type Mutation = {
    /** Adds an item to the order. If custom fields are defined on the OrderLine entity, a third argument 'customFields' will be available. */
    addItemToOrder: UpdateOrderItemsResult;
    /** Add a Payment to the Order */
    addPaymentToOrder: AddPaymentToOrderResult;
    /** Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
    adjustOrderLine: UpdateOrderItemsResult;
    /** Applies the given coupon code to the active Order */
    applyCouponCode: ApplyCouponCodeResult;
    /** Authenticates the user using a named authentication strategy */
    authenticate: AuthenticationResult;
    /** Create a new Customer Address */
    createCustomerAddress: Address;
    /** Delete an existing Address */
    deleteCustomerAddress: Success;
    /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
    login: NativeAuthenticationResult;
    /** End the current authenticated session */
    logout: Success;
    /** Regenerate and send a verification token for a new Customer registration. Only applicable if `authOptions.requireVerification` is set to true. */
    refreshCustomerVerification: RefreshCustomerVerificationResult;
    /**
     * Register a Customer account with the given credentials. There are three possible registration flows:
     *
     * _If `authOptions.requireVerification` is set to `true`:_
     *
     * 1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
     *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then
     *    verified and authenticated in one step.
     * 2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
     *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosen password of the Customer. The Customer is then
     *    verified and authenticated in one step.
     *
     * _If `authOptions.requireVerification` is set to `false`:_
     *
     * 3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.
     */
    registerCustomerAccount: RegisterCustomerAccountResult;
    /** Remove all OrderLine from the Order */
    removeAllOrderLines: RemoveOrderItemsResult;
    /** Removes the given coupon code from the active Order */
    removeCouponCode?: Maybe<Order>;
    /** Remove an OrderLine from the Order */
    removeOrderLine: RemoveOrderItemsResult;
    /** Requests a password reset email to be sent */
    requestPasswordReset?: Maybe<RequestPasswordResetResult>;
    /**
     * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
     * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
     * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
     * that verification token to the Customer, which is then used to verify the change of email address.
     */
    requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
    /** Resets a Customer's password based on the provided token */
    resetPassword: ResetPasswordResult;
    /** Set the Customer for the Order. Required only if the Customer is not currently logged in */
    setCustomerForOrder: SetCustomerForOrderResult;
    /** Sets the billing address for this order */
    setOrderBillingAddress: ActiveOrderResult;
    /** Allows any custom fields to be set for the active order */
    setOrderCustomFields: ActiveOrderResult;
    /** Sets the shipping address for this order */
    setOrderShippingAddress: ActiveOrderResult;
    /**
     * Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query.
     * An Order can have multiple shipping methods, in which case you can pass an array of ids. In this case,
     * you should configure a custom ShippingLineAssignmentStrategy in order to know which OrderLines each
     * shipping method will apply to.
     */
    setOrderShippingMethod: SetOrderShippingMethodResult;
    /** Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates` */
    transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
    /** Update an existing Customer */
    updateCustomer: Customer;
    /** Update an existing Address */
    updateCustomerAddress: Address;
    /**
     * Confirm the update of the emailAddress with the provided token, which has been generated by the
     * `requestUpdateCustomerEmailAddress` mutation.
     */
    updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
    /** Update the password of the active Customer */
    updateCustomerPassword: UpdateCustomerPasswordResult;
    /**
     * Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.
     *
     * If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the password _must_ be
     * provided here.
     */
    verifyCustomerAccount: VerifyCustomerAccountResult;
};

export type MutationAddItemToOrderArgs = {
    productVariantId: Scalars['ID'];
    quantity: Scalars['Int'];
};

export type MutationAddPaymentToOrderArgs = {
    input: PaymentInput;
};

export type MutationAdjustOrderLineArgs = {
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
};

export type MutationApplyCouponCodeArgs = {
    couponCode: Scalars['String'];
};

export type MutationAuthenticateArgs = {
    input: AuthenticationInput;
    rememberMe?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateCustomerAddressArgs = {
    input: CreateAddressInput;
};

export type MutationDeleteCustomerAddressArgs = {
    id: Scalars['ID'];
};

export type MutationLoginArgs = {
    password: Scalars['String'];
    rememberMe?: InputMaybe<Scalars['Boolean']>;
    username: Scalars['String'];
};

export type MutationRefreshCustomerVerificationArgs = {
    emailAddress: Scalars['String'];
};

export type MutationRegisterCustomerAccountArgs = {
    input: RegisterCustomerInput;
};

export type MutationRemoveCouponCodeArgs = {
    couponCode: Scalars['String'];
};

export type MutationRemoveOrderLineArgs = {
    orderLineId: Scalars['ID'];
};

export type MutationRequestPasswordResetArgs = {
    emailAddress: Scalars['String'];
};

export type MutationRequestUpdateCustomerEmailAddressArgs = {
    newEmailAddress: Scalars['String'];
    password: Scalars['String'];
};

export type MutationResetPasswordArgs = {
    password: Scalars['String'];
    token: Scalars['String'];
};

export type MutationSetCustomerForOrderArgs = {
    input: CreateCustomerInput;
};

export type MutationSetOrderBillingAddressArgs = {
    input: CreateAddressInput;
};

export type MutationSetOrderCustomFieldsArgs = {
    input: UpdateOrderInput;
};

export type MutationSetOrderShippingAddressArgs = {
    input: CreateAddressInput;
};

export type MutationSetOrderShippingMethodArgs = {
    shippingMethodId: Array<Scalars['ID']>;
};

export type MutationTransitionOrderToStateArgs = {
    state: Scalars['String'];
};

export type MutationUpdateCustomerArgs = {
    input: UpdateCustomerInput;
};

export type MutationUpdateCustomerAddressArgs = {
    input: UpdateAddressInput;
};

export type MutationUpdateCustomerEmailAddressArgs = {
    token: Scalars['String'];
};

export type MutationUpdateCustomerPasswordArgs = {
    currentPassword: Scalars['String'];
    newPassword: Scalars['String'];
};

export type MutationVerifyCustomerAccountArgs = {
    password?: InputMaybe<Scalars['String']>;
    token: Scalars['String'];
};

export type NativeAuthInput = {
    password: Scalars['String'];
    username: Scalars['String'];
};

/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type NativeAuthenticationResult =
    | CurrentUser
    | InvalidCredentialsError
    | NativeAuthStrategyError
    | NotVerifiedError;

/** Returned when attempting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export type NoActiveOrderError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type Node = {
    id: Scalars['ID'];
};

/**
 * Returned if `authOptions.requireVerification` is set to `true` (which is the default)
 * and an unverified user attempts to authenticate.
 */
export type NotVerifiedError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Operators for filtering on a list of Number fields */
export type NumberListOperators = {
    inList: Scalars['Float'];
};

/** Operators for filtering on a Int or Float field */
export type NumberOperators = {
    between?: InputMaybe<NumberRange>;
    eq?: InputMaybe<Scalars['Float']>;
    gt?: InputMaybe<Scalars['Float']>;
    gte?: InputMaybe<Scalars['Float']>;
    isNull?: InputMaybe<Scalars['Boolean']>;
    lt?: InputMaybe<Scalars['Float']>;
    lte?: InputMaybe<Scalars['Float']>;
};

export type NumberRange = {
    end: Scalars['Float'];
    start: Scalars['Float'];
};

export type Order = Node & {
    /** An order is active as long as the payment process has not been completed */
    active: Scalars['Boolean'];
    billingAddress?: Maybe<OrderAddress>;
    /** A unique code for the Order */
    code: Scalars['String'];
    /** An array of all coupon codes applied to the Order */
    couponCodes: Array<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    currencyCode: CurrencyCode;
    customFields?: Maybe<Scalars['JSON']>;
    customer?: Maybe<Customer>;
    discounts: Array<Discount>;
    fulfillments?: Maybe<Array<Fulfillment>>;
    history: HistoryEntryList;
    id: Scalars['ID'];
    lines: Array<OrderLine>;
    /**
     * The date & time that the Order was placed, i.e. the Customer
     * completed the checkout and the Order is no longer "active"
     */
    orderPlacedAt?: Maybe<Scalars['DateTime']>;
    payments?: Maybe<Array<Payment>>;
    /** Promotions applied to the order. Only gets populated after the payment process has completed. */
    promotions: Array<Promotion>;
    shipping: Scalars['Money'];
    shippingAddress?: Maybe<OrderAddress>;
    shippingLines: Array<ShippingLine>;
    shippingWithTax: Scalars['Money'];
    state: Scalars['String'];
    /**
     * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
     * discounts which have been prorated (proportionally distributed) amongst the items of each OrderLine.
     * To get a total of all OrderLines which does not account for prorated discounts, use the
     * sum of `OrderLine.discountedLinePrice` values.
     */
    subTotal: Scalars['Money'];
    /** Same as subTotal, but inclusive of tax */
    subTotalWithTax: Scalars['Money'];
    /**
     * Surcharges are arbitrary modifications to the Order total which are neither
     * ProductVariants nor discounts resulting from applied Promotions. For example,
     * one-off discounts based on customer interaction, or surcharges based on payment
     * methods.
     */
    surcharges: Array<Surcharge>;
    /** A summary of the taxes being applied to this Order */
    taxSummary: Array<OrderTaxSummary>;
    /** Equal to subTotal plus shipping */
    total: Scalars['Money'];
    totalQuantity: Scalars['Int'];
    /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
    totalWithTax: Scalars['Money'];
    type: OrderType;
    updatedAt: Scalars['DateTime'];
};

export type OrderHistoryArgs = {
    options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
    city?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    countryCode?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
    fullName?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    streetLine1?: Maybe<Scalars['String']>;
    streetLine2?: Maybe<Scalars['String']>;
};

export type OrderFilterParameter = {
    active?: InputMaybe<BooleanOperators>;
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    currencyCode?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    orderPlacedAt?: InputMaybe<DateOperators>;
    shipping?: InputMaybe<NumberOperators>;
    shippingWithTax?: InputMaybe<NumberOperators>;
    state?: InputMaybe<StringOperators>;
    subTotal?: InputMaybe<NumberOperators>;
    subTotalWithTax?: InputMaybe<NumberOperators>;
    total?: InputMaybe<NumberOperators>;
    totalQuantity?: InputMaybe<NumberOperators>;
    totalWithTax?: InputMaybe<NumberOperators>;
    type?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

/** Returned when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
    errorCode: ErrorCode;
    maxItems: Scalars['Int'];
    message: Scalars['String'];
};

export type OrderLine = Node & {
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    /** The price of the line including discounts, excluding tax */
    discountedLinePrice: Scalars['Money'];
    /** The price of the line including discounts and tax */
    discountedLinePriceWithTax: Scalars['Money'];
    /**
     * The price of a single unit including discounts, excluding tax.
     *
     * If Order-level discounts have been applied, this will not be the
     * actual taxable unit price (see `proratedUnitPrice`), but is generally the
     * correct price to display to customers to avoid confusion
     * about the internal handling of distributed Order-level discounts.
     */
    discountedUnitPrice: Scalars['Money'];
    /** The price of a single unit including discounts and tax */
    discountedUnitPriceWithTax: Scalars['Money'];
    discounts: Array<Discount>;
    featuredAsset?: Maybe<Asset>;
    fulfillmentLines?: Maybe<Array<FulfillmentLine>>;
    id: Scalars['ID'];
    /** The total price of the line excluding tax and discounts. */
    linePrice: Scalars['Money'];
    /** The total price of the line including tax but excluding discounts. */
    linePriceWithTax: Scalars['Money'];
    /** The total tax on this line */
    lineTax: Scalars['Money'];
    order: Order;
    /** The quantity at the time the Order was placed */
    orderPlacedQuantity: Scalars['Int'];
    productVariant: ProductVariant;
    /**
     * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
     * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
     * and refund calculations.
     */
    proratedLinePrice: Scalars['Money'];
    /** The proratedLinePrice including tax */
    proratedLinePriceWithTax: Scalars['Money'];
    /**
     * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
     * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
     * and refund calculations.
     */
    proratedUnitPrice: Scalars['Money'];
    /** The proratedUnitPrice including tax */
    proratedUnitPriceWithTax: Scalars['Money'];
    quantity: Scalars['Int'];
    taxLines: Array<TaxLine>;
    taxRate: Scalars['Float'];
    /** The price of a single unit, excluding tax and discounts */
    unitPrice: Scalars['Money'];
    /** Non-zero if the unitPrice has changed since it was initially added to Order */
    unitPriceChangeSinceAdded: Scalars['Money'];
    /** The price of a single unit, including tax but excluding discounts */
    unitPriceWithTax: Scalars['Money'];
    /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
    unitPriceWithTaxChangeSinceAdded: Scalars['Money'];
    updatedAt: Scalars['DateTime'];
};

export type OrderList = PaginatedList & {
    items: Array<Order>;
    totalItems: Scalars['Int'];
};

export type OrderListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<OrderFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<OrderSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned when attempting to add a Payment to an Order that is not in the `ArrangingPayment` state. */
export type OrderPaymentStateError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type OrderSortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    orderPlacedAt?: InputMaybe<SortOrder>;
    shipping?: InputMaybe<SortOrder>;
    shippingWithTax?: InputMaybe<SortOrder>;
    state?: InputMaybe<SortOrder>;
    subTotal?: InputMaybe<SortOrder>;
    subTotalWithTax?: InputMaybe<SortOrder>;
    total?: InputMaybe<SortOrder>;
    totalQuantity?: InputMaybe<SortOrder>;
    totalWithTax?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
    errorCode: ErrorCode;
    fromState: Scalars['String'];
    message: Scalars['String'];
    toState: Scalars['String'];
    transitionError: Scalars['String'];
};

/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export type OrderTaxSummary = {
    /** A description of this tax */
    description: Scalars['String'];
    /** The total net price of OrderLines to which this taxRate applies */
    taxBase: Scalars['Money'];
    /** The taxRate as a percentage */
    taxRate: Scalars['Float'];
    /** The total tax being applied to the Order at this taxRate */
    taxTotal: Scalars['Money'];
};

export enum OrderType {
    Aggregate = 'Aggregate',
    Regular = 'Regular',
    Seller = 'Seller',
}

export type PaginatedList = {
    items: Array<Node>;
    totalItems: Scalars['Int'];
};

/** Returned when attempting to verify a customer account with a password, when a password has already been set. */
export type PasswordAlreadySetError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned if the token used to reset a Customer's password is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type PasswordResetTokenExpiredError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned if the token used to reset a Customer's password is either
 * invalid or does not match any expected tokens.
 */
export type PasswordResetTokenInvalidError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned when attempting to register or verify a customer account where the given password fails password validation. */
export type PasswordValidationError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
    validationErrorMessage: Scalars['String'];
};

export type Payment = Node & {
    amount: Scalars['Money'];
    createdAt: Scalars['DateTime'];
    errorMessage?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    metadata?: Maybe<Scalars['JSON']>;
    method: Scalars['String'];
    refunds: Array<Refund>;
    state: Scalars['String'];
    transactionId?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};

/** Returned when a Payment is declined by the payment provider. */
export type PaymentDeclinedError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
    paymentErrorMessage: Scalars['String'];
};

/** Returned when a Payment fails due to an error. */
export type PaymentFailedError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
    paymentErrorMessage: Scalars['String'];
};

/** Passed as input to the `addPaymentToOrder` mutation. */
export type PaymentInput = {
    /**
     * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
     * as the "metadata" argument. For example, it could contain an ID for the payment and other
     * data generated by the payment provider.
     */
    metadata: Scalars['JSON'];
    /** This field should correspond to the `code` property of a PaymentMethod. */
    method: Scalars['String'];
};

export type PaymentMethod = Node & {
    checker?: Maybe<ConfigurableOperation>;
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    enabled: Scalars['Boolean'];
    handler: ConfigurableOperation;
    id: Scalars['ID'];
    name: Scalars['String'];
    translations: Array<PaymentMethodTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type PaymentMethodQuote = {
    code: Scalars['String'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    eligibilityMessage?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    isEligible: Scalars['Boolean'];
    name: Scalars['String'];
};

export type PaymentMethodTranslation = {
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type Performer = Node & {
    createdAt: Scalars['DateTime'];
    deletedAt?: Maybe<Scalars['DateTime']>;
    description?: Maybe<Scalars['String']>;
    featured?: Maybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    products?: Maybe<Array<Maybe<Product>>>;
    rating?: Maybe<Scalars['Float']>;
    type: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type PerformerList = PaginatedList & {
    items: Array<Performer>;
    totalItems: Scalars['Int'];
};

export type PerformerListOptions = {
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
};

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export enum Permission {
    /** Authenticated means simply that the user is logged in */
    Authenticated = 'Authenticated',
    /** Grants permission to create Administrator */
    CreateAdministrator = 'CreateAdministrator',
    /** Grants permission to create Asset */
    CreateAsset = 'CreateAsset',
    /** Grants permission to create Products, Facets, Assets, Collections */
    CreateCatalog = 'CreateCatalog',
    /** Grants permission to create Channel */
    CreateChannel = 'CreateChannel',
    /** Grants permission to create Collection */
    CreateCollection = 'CreateCollection',
    /** Grants permission to create Country */
    CreateCountry = 'CreateCountry',
    /** Grants permission to create Customer */
    CreateCustomer = 'CreateCustomer',
    /** Grants permission to create CustomerGroup */
    CreateCustomerGroup = 'CreateCustomerGroup',
    /** Grants permission to create Facet */
    CreateFacet = 'CreateFacet',
    /** Grants permission to create Order */
    CreateOrder = 'CreateOrder',
    /** Grants permission to create PaymentMethod */
    CreatePaymentMethod = 'CreatePaymentMethod',
    /** Allows creating performers via Admin API */
    CreatePerformer = 'CreatePerformer',
    /** Grants permission to create Product */
    CreateProduct = 'CreateProduct',
    /** Grants permission to create Promotion */
    CreatePromotion = 'CreatePromotion',
    /** Grants permission to create Seller */
    CreateSeller = 'CreateSeller',
    /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    CreateSettings = 'CreateSettings',
    /** Grants permission to create ShippingMethod */
    CreateShippingMethod = 'CreateShippingMethod',
    /** Grants permission to create StockLocation */
    CreateStockLocation = 'CreateStockLocation',
    /** Grants permission to create System */
    CreateSystem = 'CreateSystem',
    /** Grants permission to create Tag */
    CreateTag = 'CreateTag',
    /** Grants permission to create TaxCategory */
    CreateTaxCategory = 'CreateTaxCategory',
    /** Grants permission to create TaxRate */
    CreateTaxRate = 'CreateTaxRate',
    /** Grants permission to create Zone */
    CreateZone = 'CreateZone',
    /** Grants permission to delete Administrator */
    DeleteAdministrator = 'DeleteAdministrator',
    /** Grants permission to delete Asset */
    DeleteAsset = 'DeleteAsset',
    /** Grants permission to delete Products, Facets, Assets, Collections */
    DeleteCatalog = 'DeleteCatalog',
    /** Grants permission to delete Channel */
    DeleteChannel = 'DeleteChannel',
    /** Grants permission to delete Collection */
    DeleteCollection = 'DeleteCollection',
    /** Grants permission to delete Country */
    DeleteCountry = 'DeleteCountry',
    /** Grants permission to delete Customer */
    DeleteCustomer = 'DeleteCustomer',
    /** Grants permission to delete CustomerGroup */
    DeleteCustomerGroup = 'DeleteCustomerGroup',
    /** Grants permission to delete Facet */
    DeleteFacet = 'DeleteFacet',
    /** Grants permission to delete Order */
    DeleteOrder = 'DeleteOrder',
    /** Grants permission to delete PaymentMethod */
    DeletePaymentMethod = 'DeletePaymentMethod',
    /** Allows deleting performers via Admin API */
    DeletePerformer = 'DeletePerformer',
    /** Grants permission to delete Product */
    DeleteProduct = 'DeleteProduct',
    /** Grants permission to delete Promotion */
    DeletePromotion = 'DeletePromotion',
    /** Grants permission to delete Seller */
    DeleteSeller = 'DeleteSeller',
    /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    DeleteSettings = 'DeleteSettings',
    /** Grants permission to delete ShippingMethod */
    DeleteShippingMethod = 'DeleteShippingMethod',
    /** Grants permission to delete StockLocation */
    DeleteStockLocation = 'DeleteStockLocation',
    /** Grants permission to delete System */
    DeleteSystem = 'DeleteSystem',
    /** Grants permission to delete Tag */
    DeleteTag = 'DeleteTag',
    /** Grants permission to delete TaxCategory */
    DeleteTaxCategory = 'DeleteTaxCategory',
    /** Grants permission to delete TaxRate */
    DeleteTaxRate = 'DeleteTaxRate',
    /** Grants permission to delete Zone */
    DeleteZone = 'DeleteZone',
    /** Owner means the user owns this entity, e.g. a Customer's own Order */
    Owner = 'Owner',
    /** Public means any unauthenticated user may perform the operation */
    Public = 'Public',
    /** Grants permission to read Administrator */
    ReadAdministrator = 'ReadAdministrator',
    /** Grants permission to read Asset */
    ReadAsset = 'ReadAsset',
    /** Grants permission to read Products, Facets, Assets, Collections */
    ReadCatalog = 'ReadCatalog',
    /** Grants permission to read Channel */
    ReadChannel = 'ReadChannel',
    /** Grants permission to read Collection */
    ReadCollection = 'ReadCollection',
    /** Grants permission to read Country */
    ReadCountry = 'ReadCountry',
    /** Grants permission to read Customer */
    ReadCustomer = 'ReadCustomer',
    /** Grants permission to read CustomerGroup */
    ReadCustomerGroup = 'ReadCustomerGroup',
    /** Grants permission to read Facet */
    ReadFacet = 'ReadFacet',
    /** Grants permission to read Order */
    ReadOrder = 'ReadOrder',
    /** Grants permission to read PaymentMethod */
    ReadPaymentMethod = 'ReadPaymentMethod',
    /** Allows rading performers via Admin API and Shop API */
    ReadPerformer = 'ReadPerformer',
    /** Grants permission to read Product */
    ReadProduct = 'ReadProduct',
    /** Grants permission to read Promotion */
    ReadPromotion = 'ReadPromotion',
    /** Grants permission to read Seller */
    ReadSeller = 'ReadSeller',
    /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    ReadSettings = 'ReadSettings',
    /** Grants permission to read ShippingMethod */
    ReadShippingMethod = 'ReadShippingMethod',
    /** Grants permission to read StockLocation */
    ReadStockLocation = 'ReadStockLocation',
    /** Grants permission to read System */
    ReadSystem = 'ReadSystem',
    /** Grants permission to read Tag */
    ReadTag = 'ReadTag',
    /** Grants permission to read TaxCategory */
    ReadTaxCategory = 'ReadTaxCategory',
    /** Grants permission to read TaxRate */
    ReadTaxRate = 'ReadTaxRate',
    /** Grants permission to read Zone */
    ReadZone = 'ReadZone',
    /** SuperAdmin has unrestricted access to all operations */
    SuperAdmin = 'SuperAdmin',
    /** Grants permission to update Administrator */
    UpdateAdministrator = 'UpdateAdministrator',
    /** Grants permission to update Asset */
    UpdateAsset = 'UpdateAsset',
    /** Grants permission to update Products, Facets, Assets, Collections */
    UpdateCatalog = 'UpdateCatalog',
    /** Grants permission to update Channel */
    UpdateChannel = 'UpdateChannel',
    /** Grants permission to update Collection */
    UpdateCollection = 'UpdateCollection',
    /** Grants permission to update Country */
    UpdateCountry = 'UpdateCountry',
    /** Grants permission to update Customer */
    UpdateCustomer = 'UpdateCustomer',
    /** Grants permission to update CustomerGroup */
    UpdateCustomerGroup = 'UpdateCustomerGroup',
    /** Grants permission to update Facet */
    UpdateFacet = 'UpdateFacet',
    /** Grants permission to update GlobalSettings */
    UpdateGlobalSettings = 'UpdateGlobalSettings',
    /** Grants permission to update Order */
    UpdateOrder = 'UpdateOrder',
    /** Grants permission to update PaymentMethod */
    UpdatePaymentMethod = 'UpdatePaymentMethod',
    /** Allows updating performers via Admin API and Shop API */
    UpdatePerformer = 'UpdatePerformer',
    /** Grants permission to update Product */
    UpdateProduct = 'UpdateProduct',
    /** Grants permission to update Promotion */
    UpdatePromotion = 'UpdatePromotion',
    /** Grants permission to update Seller */
    UpdateSeller = 'UpdateSeller',
    /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    UpdateSettings = 'UpdateSettings',
    /** Grants permission to update ShippingMethod */
    UpdateShippingMethod = 'UpdateShippingMethod',
    /** Grants permission to update StockLocation */
    UpdateStockLocation = 'UpdateStockLocation',
    /** Grants permission to update System */
    UpdateSystem = 'UpdateSystem',
    /** Grants permission to update Tag */
    UpdateTag = 'UpdateTag',
    /** Grants permission to update TaxCategory */
    UpdateTaxCategory = 'UpdateTaxCategory',
    /** Grants permission to update TaxRate */
    UpdateTaxRate = 'UpdateTaxRate',
    /** Grants permission to update Zone */
    UpdateZone = 'UpdateZone',
}

/** The price range where the result has more than one price */
export type PriceRange = {
    max: Scalars['Money'];
    min: Scalars['Money'];
};

export type Product = Node & {
    assets: Array<Asset>;
    collections: Array<Collection>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<ProductCustomFields>;
    description: Scalars['String'];
    facetValues: Array<FacetValue>;
    featuredAsset?: Maybe<Asset>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    optionGroups: Array<ProductOptionGroup>;
    slug: Scalars['String'];
    translations: Array<ProductTranslation>;
    updatedAt: Scalars['DateTime'];
    /** Returns a paginated, sortable, filterable list of ProductVariants */
    variantList: ProductVariantList;
    /** Returns all ProductVariants */
    variants: Array<ProductVariant>;
};

export type ProductVariantListArgs = {
    options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductCustomFields = {
    dateTime?: Maybe<Scalars['DateTime']>;
    featured?: Maybe<Scalars['Boolean']>;
    performers?: Maybe<Array<Performer>>;
    productType?: Maybe<Scalars['String']>;
    venue?: Maybe<Scalars['String']>;
};

export type ProductFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    dateTime?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    featured?: InputMaybe<BooleanOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    productType?: InputMaybe<StringOperators>;
    slug?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
    venue?: InputMaybe<StringOperators>;
};

export type ProductList = PaginatedList & {
    items: Array<Product>;
    totalItems: Scalars['Int'];
};

export type ProductListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<ProductFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<ProductSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

export type ProductOption = Node & {
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    group: ProductOptionGroup;
    groupId: Scalars['ID'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<ProductOptionTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroup = Node & {
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    options: Array<ProductOption>;
    translations: Array<ProductOptionGroupTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroupTranslation = {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type ProductOptionTranslation = {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type ProductSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    dateTime?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    featured?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    productType?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
    venue?: InputMaybe<SortOrder>;
};

export type ProductTranslation = {
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type ProductVariant = Node & {
    assets: Array<Asset>;
    createdAt: Scalars['DateTime'];
    currencyCode: CurrencyCode;
    customFields?: Maybe<Scalars['JSON']>;
    facetValues: Array<FacetValue>;
    featuredAsset?: Maybe<Asset>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    options: Array<ProductOption>;
    price: Scalars['Money'];
    priceWithTax: Scalars['Money'];
    product: Product;
    productId: Scalars['ID'];
    sku: Scalars['String'];
    stockLevel: Scalars['String'];
    taxCategory: TaxCategory;
    taxRateApplied: TaxRate;
    translations: Array<ProductVariantTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type ProductVariantFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    currencyCode?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    price?: InputMaybe<NumberOperators>;
    priceWithTax?: InputMaybe<NumberOperators>;
    productId?: InputMaybe<IdOperators>;
    sku?: InputMaybe<StringOperators>;
    stockLevel?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type ProductVariantList = PaginatedList & {
    items: Array<ProductVariant>;
    totalItems: Scalars['Int'];
};

export type ProductVariantListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<ProductVariantFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<ProductVariantSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

export type ProductVariantSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    price?: InputMaybe<SortOrder>;
    priceWithTax?: InputMaybe<SortOrder>;
    productId?: InputMaybe<SortOrder>;
    sku?: InputMaybe<SortOrder>;
    stockLevel?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export type ProductVariantTranslation = {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type Promotion = Node & {
    actions: Array<ConfigurableOperation>;
    conditions: Array<ConfigurableOperation>;
    couponCode?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    enabled: Scalars['Boolean'];
    endsAt?: Maybe<Scalars['DateTime']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    perCustomerUsageLimit?: Maybe<Scalars['Int']>;
    startsAt?: Maybe<Scalars['DateTime']>;
    translations: Array<PromotionTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type PromotionList = PaginatedList & {
    items: Array<Promotion>;
    totalItems: Scalars['Int'];
};

export type PromotionTranslation = {
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type Province = Node &
    Region & {
        code: Scalars['String'];
        createdAt: Scalars['DateTime'];
        customFields?: Maybe<Scalars['JSON']>;
        enabled: Scalars['Boolean'];
        id: Scalars['ID'];
        languageCode: LanguageCode;
        name: Scalars['String'];
        parent?: Maybe<Region>;
        parentId?: Maybe<Scalars['ID']>;
        translations: Array<RegionTranslation>;
        type: Scalars['String'];
        updatedAt: Scalars['DateTime'];
    };

export type ProvinceList = PaginatedList & {
    items: Array<Province>;
    totalItems: Scalars['Int'];
};

export type Query = {
    /** The active Channel */
    activeChannel: Channel;
    /** The active Customer */
    activeCustomer?: Maybe<Customer>;
    /**
     * The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the
     * state of `PaymentAuthorized` or `PaymentSettled`, then that Order is no longer considered "active" and this
     * query will once again return `null`.
     */
    activeOrder?: Maybe<Order>;
    /** An array of supported Countries */
    availableCountries: Array<Country>;
    /** Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
    collection?: Maybe<Collection>;
    /** A list of Collections available to the shop */
    collections: CollectionList;
    /** Returns a list of payment methods and their eligibility based on the current active Order */
    eligiblePaymentMethods: Array<PaymentMethodQuote>;
    /** Returns a list of eligible shipping methods based on the current active Order */
    eligibleShippingMethods: Array<ShippingMethodQuote>;
    /** Returns a Facet by its id */
    facet?: Maybe<Facet>;
    /** A list of Facets available to the shop */
    facets: FacetList;
    /** Returns information about the current authenticated User */
    me?: Maybe<CurrentUser>;
    /** Returns the possible next states that the activeOrder can transition to */
    nextOrderStates: Array<Scalars['String']>;
    /**
     * Returns an Order based on the id. Note that in the Shop API, only orders belonging to the
     * currently-authenticated User may be queried.
     */
    order?: Maybe<Order>;
    /**
     * Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)
     * this query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation
     * screen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing
     * general anonymous access to Order data.
     */
    orderByCode?: Maybe<Order>;
    performer?: Maybe<Performer>;
    performers?: Maybe<Array<Maybe<Performer>>>;
    /** Get a Product either by id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
    product?: Maybe<Product>;
    /** Get a list of Products */
    products: ProductList;
    /** Search Products based on the criteria set by the `SearchInput` */
    search: SearchResponse;
};

export type QueryCollectionArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type QueryCollectionsArgs = {
    options?: InputMaybe<CollectionListOptions>;
};

export type QueryFacetArgs = {
    id: Scalars['ID'];
};

export type QueryFacetsArgs = {
    options?: InputMaybe<FacetListOptions>;
};

export type QueryOrderArgs = {
    id: Scalars['ID'];
};

export type QueryOrderByCodeArgs = {
    code: Scalars['String'];
};

export type QueryPerformerArgs = {
    id: Scalars['ID'];
};

export type QueryPerformersArgs = {
    options?: InputMaybe<PerformerListOptions>;
};

export type QueryProductArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type QueryProductsArgs = {
    options?: InputMaybe<ProductListOptions>;
};

export type QuerySearchArgs = {
    input: SearchInput;
};

export type RefreshCustomerVerificationResult = NativeAuthStrategyError | Success;

export type Refund = Node & {
    adjustment: Scalars['Money'];
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    items: Scalars['Money'];
    lines: Array<RefundLine>;
    metadata?: Maybe<Scalars['JSON']>;
    method?: Maybe<Scalars['String']>;
    paymentId: Scalars['ID'];
    reason?: Maybe<Scalars['String']>;
    shipping: Scalars['Money'];
    state: Scalars['String'];
    total: Scalars['Money'];
    transactionId?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};

export type RefundLine = {
    orderLine: OrderLine;
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
    refund: Refund;
    refundId: Scalars['ID'];
};

export type Region = {
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    parent?: Maybe<Region>;
    parentId?: Maybe<Scalars['ID']>;
    translations: Array<RegionTranslation>;
    type: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type RegionTranslation = {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type RegisterCustomerAccountResult =
    | MissingPasswordError
    | NativeAuthStrategyError
    | PasswordValidationError
    | Success;

export type RegisterCustomerInput = {
    emailAddress: Scalars['String'];
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RelationCustomFieldConfig = CustomField & {
    description?: Maybe<Array<LocalizedString>>;
    entity: Scalars['String'];
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    scalarFields: Array<Scalars['String']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RequestPasswordResetResult = NativeAuthStrategyError | Success;

export type RequestUpdateCustomerEmailAddressResult =
    | EmailAddressConflictError
    | InvalidCredentialsError
    | NativeAuthStrategyError
    | Success;

export type ResetPasswordResult =
    | CurrentUser
    | NativeAuthStrategyError
    | NotVerifiedError
    | PasswordResetTokenExpiredError
    | PasswordResetTokenInvalidError
    | PasswordValidationError;

export type Role = Node & {
    channels: Array<Channel>;
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    permissions: Array<Permission>;
    updatedAt: Scalars['DateTime'];
};

export type RoleList = PaginatedList & {
    items: Array<Role>;
    totalItems: Scalars['Int'];
};

export type SearchInput = {
    collectionId?: InputMaybe<Scalars['ID']>;
    collectionSlug?: InputMaybe<Scalars['String']>;
    facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
    /** @deprecated Use `facetValueFilters` instead */
    facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
    /** @deprecated Use `facetValueFilters` instead */
    facetValueOperator?: InputMaybe<LogicalOperator>;
    groupByProduct?: InputMaybe<Scalars['Boolean']>;
    skip?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<SearchResultSortParameter>;
    take?: InputMaybe<Scalars['Int']>;
    term?: InputMaybe<Scalars['String']>;
};

export type SearchReindexResponse = {
    success: Scalars['Boolean'];
};

export type SearchResponse = {
    collections: Array<CollectionResult>;
    facetValues: Array<FacetValueResult>;
    items: Array<SearchResult>;
    totalItems: Scalars['Int'];
};

export type SearchResult = {
    /** An array of ids of the Collections in which this result appears */
    collectionIds: Array<Scalars['ID']>;
    currencyCode: CurrencyCode;
    description: Scalars['String'];
    facetIds: Array<Scalars['ID']>;
    facetValueIds: Array<Scalars['ID']>;
    price: SearchResultPrice;
    priceWithTax: SearchResultPrice;
    productAsset?: Maybe<SearchResultAsset>;
    productId: Scalars['ID'];
    productName: Scalars['String'];
    productVariantAsset?: Maybe<SearchResultAsset>;
    productVariantId: Scalars['ID'];
    productVariantName: Scalars['String'];
    /** A relevance score for the result. Differs between database implementations */
    score: Scalars['Float'];
    sku: Scalars['String'];
    slug: Scalars['String'];
};

export type SearchResultAsset = {
    focalPoint?: Maybe<Coordinate>;
    id: Scalars['ID'];
    preview: Scalars['String'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
    name?: InputMaybe<SortOrder>;
    price?: InputMaybe<SortOrder>;
};

export type Seller = Node & {
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type SetCustomerForOrderResult =
    | AlreadyLoggedInError
    | EmailAddressConflictError
    | GuestCheckoutError
    | NoActiveOrderError
    | Order;

export type SetOrderShippingMethodResult =
    | IneligibleShippingMethodError
    | NoActiveOrderError
    | Order
    | OrderModificationError;

export type ShippingLine = {
    discountedPrice: Scalars['Money'];
    discountedPriceWithTax: Scalars['Money'];
    discounts: Array<Discount>;
    id: Scalars['ID'];
    price: Scalars['Money'];
    priceWithTax: Scalars['Money'];
    shippingMethod: ShippingMethod;
};

export type ShippingMethod = Node & {
    calculator: ConfigurableOperation;
    checker: ConfigurableOperation;
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    fulfillmentHandlerCode: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<ShippingMethodTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type ShippingMethodList = PaginatedList & {
    items: Array<ShippingMethod>;
    totalItems: Scalars['Int'];
};

export type ShippingMethodQuote = {
    code: Scalars['String'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    id: Scalars['ID'];
    /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
    metadata?: Maybe<Scalars['JSON']>;
    name: Scalars['String'];
    price: Scalars['Money'];
    priceWithTax: Scalars['Money'];
};

export type ShippingMethodTranslation = {
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

/** The price value where the result has a single price */
export type SinglePrice = {
    value: Scalars['Money'];
};

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

export type StringCustomFieldConfig = CustomField & {
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    length?: Maybe<Scalars['Int']>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    options?: Maybe<Array<StringFieldOption>>;
    pattern?: Maybe<Scalars['String']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type StringFieldOption = {
    label?: Maybe<Array<LocalizedString>>;
    value: Scalars['String'];
};

/** Operators for filtering on a list of String fields */
export type StringListOperators = {
    inList: Scalars['String'];
};

/** Operators for filtering on a String field */
export type StringOperators = {
    contains?: InputMaybe<Scalars['String']>;
    eq?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    isNull?: InputMaybe<Scalars['Boolean']>;
    notContains?: InputMaybe<Scalars['String']>;
    notEq?: InputMaybe<Scalars['String']>;
    notIn?: InputMaybe<Array<Scalars['String']>>;
    regex?: InputMaybe<Scalars['String']>;
};

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
    success: Scalars['Boolean'];
};

export type Surcharge = Node & {
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    price: Scalars['Money'];
    priceWithTax: Scalars['Money'];
    sku?: Maybe<Scalars['String']>;
    taxLines: Array<TaxLine>;
    taxRate: Scalars['Float'];
    updatedAt: Scalars['DateTime'];
};

export type Tag = Node & {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    updatedAt: Scalars['DateTime'];
    value: Scalars['String'];
};

export type TagList = PaginatedList & {
    items: Array<Tag>;
    totalItems: Scalars['Int'];
};

export type TaxCategory = Node & {
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    isDefault: Scalars['Boolean'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type TaxLine = {
    description: Scalars['String'];
    taxRate: Scalars['Float'];
};

export type TaxRate = Node & {
    category: TaxCategory;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    customerGroup?: Maybe<CustomerGroup>;
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
    value: Scalars['Float'];
    zone: Zone;
};

export type TaxRateList = PaginatedList & {
    items: Array<TaxRate>;
    totalItems: Scalars['Int'];
};

export type TextCustomFieldConfig = CustomField & {
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type UpdateAddressInput = {
    city?: InputMaybe<Scalars['String']>;
    company?: InputMaybe<Scalars['String']>;
    countryCode?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
    defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
    fullName?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    phoneNumber?: InputMaybe<Scalars['String']>;
    postalCode?: InputMaybe<Scalars['String']>;
    province?: InputMaybe<Scalars['String']>;
    streetLine1?: InputMaybe<Scalars['String']>;
    streetLine2?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerEmailAddressResult =
    | IdentifierChangeTokenExpiredError
    | IdentifierChangeTokenInvalidError
    | NativeAuthStrategyError
    | Success;

export type UpdateCustomerInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerPasswordResult =
    | InvalidCredentialsError
    | NativeAuthStrategyError
    | PasswordValidationError
    | Success;

export type UpdateOrderInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
};

export type UpdateOrderItemsResult =
    | InsufficientStockError
    | NegativeQuantityError
    | Order
    | OrderLimitError
    | OrderModificationError;

export type User = Node & {
    authenticationMethods: Array<AuthenticationMethod>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    identifier: Scalars['String'];
    lastLogin?: Maybe<Scalars['DateTime']>;
    roles: Array<Role>;
    updatedAt: Scalars['DateTime'];
    verified: Scalars['Boolean'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type VerificationTokenExpiredError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is either
 * invalid or does not match any expected tokens.
 */
export type VerificationTokenInvalidError = ErrorResult & {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type VerifyCustomerAccountResult =
    | CurrentUser
    | MissingPasswordError
    | NativeAuthStrategyError
    | PasswordAlreadySetError
    | PasswordValidationError
    | VerificationTokenExpiredError
    | VerificationTokenInvalidError;

export type Zone = Node & {
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    members: Array<Region>;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type TestOrderFragmentFragment = {
    id: string;
    code: string;
    state: string;
    active: boolean;
    subTotal: number;
    subTotalWithTax: number;
    shipping: number;
    shippingWithTax: number;
    total: number;
    totalWithTax: number;
    currencyCode: CurrencyCode;
    couponCodes: Array<string>;
    discounts: Array<{
        adjustmentSource: string;
        amount: number;
        amountWithTax: number;
        description: string;
        type: AdjustmentType;
    }>;
    payments?: Array<{
        id: string;
        transactionId?: string | null;
        method: string;
        amount: number;
        state: string;
        metadata?: any | null;
    }> | null;
    lines: Array<{
        id: string;
        quantity: number;
        linePrice: number;
        linePriceWithTax: number;
        unitPrice: number;
        unitPriceWithTax: number;
        unitPriceChangeSinceAdded: number;
        unitPriceWithTaxChangeSinceAdded: number;
        proratedUnitPriceWithTax: number;
        productVariant: { id: string };
        discounts: Array<{
            adjustmentSource: string;
            amount: number;
            amountWithTax: number;
            description: string;
            type: AdjustmentType;
        }>;
    }>;
    shippingLines: Array<{ shippingMethod: { id: string; code: string; description: string } }>;
    customer?: { id: string; user?: { id: string; identifier: string } | null } | null;
    history: { items: Array<{ id: string; type: HistoryEntryType; data: any }> };
};

export type AddPaymentToOrderMutationVariables = Exact<{
    input: PaymentInput;
}>;

export type AddPaymentToOrderMutation = {
    addPaymentToOrder:
        | { errorCode: ErrorCode; message: string; eligibilityCheckerMessage?: string | null }
        | { errorCode: ErrorCode; message: string }
        | {
              id: string;
              code: string;
              state: string;
              active: boolean;
              subTotal: number;
              subTotalWithTax: number;
              shipping: number;
              shippingWithTax: number;
              total: number;
              totalWithTax: number;
              currencyCode: CurrencyCode;
              couponCodes: Array<string>;
              discounts: Array<{
                  adjustmentSource: string;
                  amount: number;
                  amountWithTax: number;
                  description: string;
                  type: AdjustmentType;
              }>;
              payments?: Array<{
                  id: string;
                  transactionId?: string | null;
                  method: string;
                  amount: number;
                  state: string;
                  metadata?: any | null;
              }> | null;
              lines: Array<{
                  id: string;
                  quantity: number;
                  linePrice: number;
                  linePriceWithTax: number;
                  unitPrice: number;
                  unitPriceWithTax: number;
                  unitPriceChangeSinceAdded: number;
                  unitPriceWithTaxChangeSinceAdded: number;
                  proratedUnitPriceWithTax: number;
                  productVariant: { id: string };
                  discounts: Array<{
                      adjustmentSource: string;
                      amount: number;
                      amountWithTax: number;
                      description: string;
                      type: AdjustmentType;
                  }>;
              }>;
              shippingLines: Array<{ shippingMethod: { id: string; code: string; description: string } }>;
              customer?: { id: string; user?: { id: string; identifier: string } | null } | null;
              history: { items: Array<{ id: string; type: HistoryEntryType; data: any }> };
          }
        | { errorCode: ErrorCode; message: string }
        | { errorCode: ErrorCode; message: string; transitionError: string }
        | { errorCode: ErrorCode; message: string; paymentErrorMessage: string }
        | { errorCode: ErrorCode; message: string; paymentErrorMessage: string };
};

export type SetShippingAddressMutationVariables = Exact<{
    input: CreateAddressInput;
}>;

export type SetShippingAddressMutation = {
    setOrderShippingAddress:
        | { errorCode: ErrorCode; message: string }
        | {
              shippingAddress?: {
                  fullName?: string | null;
                  company?: string | null;
                  streetLine1?: string | null;
                  streetLine2?: string | null;
                  city?: string | null;
                  province?: string | null;
                  postalCode?: string | null;
                  country?: string | null;
                  phoneNumber?: string | null;
              } | null;
          };
};

export type GetShippingMethodsQueryVariables = Exact<{ [key: string]: never }>;

export type GetShippingMethodsQuery = {
    eligibleShippingMethods: Array<{
        id: string;
        code: string;
        price: number;
        name: string;
        description: string;
    }>;
};

export type TransitionToStateMutationVariables = Exact<{
    state: Scalars['String'];
}>;

export type TransitionToStateMutation = {
    transitionOrderToState?:
        | { id: string }
        | {
              errorCode: ErrorCode;
              message: string;
              transitionError: string;
              fromState: string;
              toState: string;
          }
        | null;
};

export type SetShippingMethodMutationVariables = Exact<{
    id: Array<Scalars['ID']> | Scalars['ID'];
}>;

export type SetShippingMethodMutation = {
    setOrderShippingMethod:
        | { errorCode: ErrorCode; message: string }
        | { errorCode: ErrorCode; message: string }
        | {
              id: string;
              code: string;
              state: string;
              active: boolean;
              subTotal: number;
              subTotalWithTax: number;
              shipping: number;
              shippingWithTax: number;
              total: number;
              totalWithTax: number;
              currencyCode: CurrencyCode;
              couponCodes: Array<string>;
              discounts: Array<{
                  adjustmentSource: string;
                  amount: number;
                  amountWithTax: number;
                  description: string;
                  type: AdjustmentType;
              }>;
              payments?: Array<{
                  id: string;
                  transactionId?: string | null;
                  method: string;
                  amount: number;
                  state: string;
                  metadata?: any | null;
              }> | null;
              lines: Array<{
                  id: string;
                  quantity: number;
                  linePrice: number;
                  linePriceWithTax: number;
                  unitPrice: number;
                  unitPriceWithTax: number;
                  unitPriceChangeSinceAdded: number;
                  unitPriceWithTaxChangeSinceAdded: number;
                  proratedUnitPriceWithTax: number;
                  productVariant: { id: string };
                  discounts: Array<{
                      adjustmentSource: string;
                      amount: number;
                      amountWithTax: number;
                      description: string;
                      type: AdjustmentType;
                  }>;
              }>;
              shippingLines: Array<{ shippingMethod: { id: string; code: string; description: string } }>;
              customer?: { id: string; user?: { id: string; identifier: string } | null } | null;
              history: { items: Array<{ id: string; type: HistoryEntryType; data: any }> };
          }
        | { errorCode: ErrorCode; message: string };
};

export type AddItemToOrderMutationVariables = Exact<{
    productVariantId: Scalars['ID'];
    quantity: Scalars['Int'];
}>;

export type AddItemToOrderMutation = {
    addItemToOrder:
        | {
              errorCode: ErrorCode;
              message: string;
              quantityAvailable: number;
              order: {
                  id: string;
                  code: string;
                  state: string;
                  active: boolean;
                  subTotal: number;
                  subTotalWithTax: number;
                  shipping: number;
                  shippingWithTax: number;
                  total: number;
                  totalWithTax: number;
                  currencyCode: CurrencyCode;
                  couponCodes: Array<string>;
                  discounts: Array<{
                      adjustmentSource: string;
                      amount: number;
                      amountWithTax: number;
                      description: string;
                      type: AdjustmentType;
                  }>;
                  payments?: Array<{
                      id: string;
                      transactionId?: string | null;
                      method: string;
                      amount: number;
                      state: string;
                      metadata?: any | null;
                  }> | null;
                  lines: Array<{
                      id: string;
                      quantity: number;
                      linePrice: number;
                      linePriceWithTax: number;
                      unitPrice: number;
                      unitPriceWithTax: number;
                      unitPriceChangeSinceAdded: number;
                      unitPriceWithTaxChangeSinceAdded: number;
                      proratedUnitPriceWithTax: number;
                      productVariant: { id: string };
                      discounts: Array<{
                          adjustmentSource: string;
                          amount: number;
                          amountWithTax: number;
                          description: string;
                          type: AdjustmentType;
                      }>;
                  }>;
                  shippingLines: Array<{ shippingMethod: { id: string; code: string; description: string } }>;
                  customer?: { id: string; user?: { id: string; identifier: string } | null } | null;
                  history: { items: Array<{ id: string; type: HistoryEntryType; data: any }> };
              };
          }
        | { errorCode: ErrorCode; message: string }
        | {
              id: string;
              code: string;
              state: string;
              active: boolean;
              subTotal: number;
              subTotalWithTax: number;
              shipping: number;
              shippingWithTax: number;
              total: number;
              totalWithTax: number;
              currencyCode: CurrencyCode;
              couponCodes: Array<string>;
              discounts: Array<{
                  adjustmentSource: string;
                  amount: number;
                  amountWithTax: number;
                  description: string;
                  type: AdjustmentType;
              }>;
              payments?: Array<{
                  id: string;
                  transactionId?: string | null;
                  method: string;
                  amount: number;
                  state: string;
                  metadata?: any | null;
              }> | null;
              lines: Array<{
                  id: string;
                  quantity: number;
                  linePrice: number;
                  linePriceWithTax: number;
                  unitPrice: number;
                  unitPriceWithTax: number;
                  unitPriceChangeSinceAdded: number;
                  unitPriceWithTaxChangeSinceAdded: number;
                  proratedUnitPriceWithTax: number;
                  productVariant: { id: string };
                  discounts: Array<{
                      adjustmentSource: string;
                      amount: number;
                      amountWithTax: number;
                      description: string;
                      type: AdjustmentType;
                  }>;
              }>;
              shippingLines: Array<{ shippingMethod: { id: string; code: string; description: string } }>;
              customer?: { id: string; user?: { id: string; identifier: string } | null } | null;
              history: { items: Array<{ id: string; type: HistoryEntryType; data: any }> };
          }
        | { errorCode: ErrorCode; message: string }
        | { errorCode: ErrorCode; message: string };
};

export type GetOrderByCodeQueryVariables = Exact<{
    code: Scalars['String'];
}>;

export type GetOrderByCodeQuery = {
    orderByCode?: {
        id: string;
        code: string;
        state: string;
        active: boolean;
        subTotal: number;
        subTotalWithTax: number;
        shipping: number;
        shippingWithTax: number;
        total: number;
        totalWithTax: number;
        currencyCode: CurrencyCode;
        couponCodes: Array<string>;
        discounts: Array<{
            adjustmentSource: string;
            amount: number;
            amountWithTax: number;
            description: string;
            type: AdjustmentType;
        }>;
        payments?: Array<{
            id: string;
            transactionId?: string | null;
            method: string;
            amount: number;
            state: string;
            metadata?: any | null;
        }> | null;
        lines: Array<{
            id: string;
            quantity: number;
            linePrice: number;
            linePriceWithTax: number;
            unitPrice: number;
            unitPriceWithTax: number;
            unitPriceChangeSinceAdded: number;
            unitPriceWithTaxChangeSinceAdded: number;
            proratedUnitPriceWithTax: number;
            productVariant: { id: string };
            discounts: Array<{
                adjustmentSource: string;
                amount: number;
                amountWithTax: number;
                description: string;
                type: AdjustmentType;
            }>;
        }>;
        shippingLines: Array<{ shippingMethod: { id: string; code: string; description: string } }>;
        customer?: { id: string; user?: { id: string; identifier: string } | null } | null;
        history: { items: Array<{ id: string; type: HistoryEntryType; data: any }> };
    } | null;
};

export type GetActiveOrderQueryVariables = Exact<{ [key: string]: never }>;

export type GetActiveOrderQuery = {
    activeOrder?: {
        id: string;
        code: string;
        state: string;
        active: boolean;
        subTotal: number;
        subTotalWithTax: number;
        shipping: number;
        shippingWithTax: number;
        total: number;
        totalWithTax: number;
        currencyCode: CurrencyCode;
        couponCodes: Array<string>;
        discounts: Array<{
            adjustmentSource: string;
            amount: number;
            amountWithTax: number;
            description: string;
            type: AdjustmentType;
        }>;
        payments?: Array<{
            id: string;
            transactionId?: string | null;
            method: string;
            amount: number;
            state: string;
            metadata?: any | null;
        }> | null;
        lines: Array<{
            id: string;
            quantity: number;
            linePrice: number;
            linePriceWithTax: number;
            unitPrice: number;
            unitPriceWithTax: number;
            unitPriceChangeSinceAdded: number;
            unitPriceWithTaxChangeSinceAdded: number;
            proratedUnitPriceWithTax: number;
            productVariant: { id: string };
            discounts: Array<{
                adjustmentSource: string;
                amount: number;
                amountWithTax: number;
                description: string;
                type: AdjustmentType;
            }>;
        }>;
        shippingLines: Array<{ shippingMethod: { id: string; code: string; description: string } }>;
        customer?: { id: string; user?: { id: string; identifier: string } | null } | null;
        history: { items: Array<{ id: string; type: HistoryEntryType; data: any }> };
    } | null;
};

export const TestOrderFragmentFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TestOrderFragment' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Order' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotal' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shipping' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shippingWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'totalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'currencyCode' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'couponCodes' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discounts' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'adjustmentSource' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'payments' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'transactionId' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'method' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceChangeSinceAdded' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'unitPriceWithTaxChangeSinceAdded' },
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'proratedUnitPriceWithTax' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'productVariant' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'discounts' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'adjustmentSource' },
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shippingLines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'shippingMethod' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'identifier' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'history' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'data' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<TestOrderFragmentFragment, unknown>;
export const AddPaymentToOrderDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'AddPaymentToOrder' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'PaymentInput' } },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'addPaymentToOrder' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'input' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'TestOrderFragment' },
                                },
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'ErrorResult' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'errorCode' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                                        ],
                                    },
                                },
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'PaymentDeclinedError' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'paymentErrorMessage' },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'PaymentFailedError' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'paymentErrorMessage' },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'OrderStateTransitionError' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'transitionError' },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'IneligiblePaymentMethodError' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'eligibilityCheckerMessage' },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TestOrderFragment' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Order' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotal' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shipping' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shippingWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'totalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'currencyCode' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'couponCodes' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discounts' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'adjustmentSource' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'payments' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'transactionId' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'method' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceChangeSinceAdded' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'unitPriceWithTaxChangeSinceAdded' },
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'proratedUnitPriceWithTax' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'productVariant' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'discounts' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'adjustmentSource' },
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shippingLines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'shippingMethod' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'identifier' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'history' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'data' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<AddPaymentToOrderMutation, AddPaymentToOrderMutationVariables>;
export const SetShippingAddressDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'SetShippingAddress' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateAddressInput' } },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'setOrderShippingAddress' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'input' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'Order' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'shippingAddress' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'fullName' },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'company' },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'streetLine1' },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'streetLine2' },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'city' },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'province' },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'postalCode' },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'country' },
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'phoneNumber' },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'ErrorResult' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'errorCode' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<SetShippingAddressMutation, SetShippingAddressMutationVariables>;
export const GetShippingMethodsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetShippingMethods' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'eligibleShippingMethods' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetShippingMethodsQuery, GetShippingMethodsQueryVariables>;
export const TransitionToStateDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'TransitionToState' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'state' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'transitionOrderToState' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'state' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'state' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'Order' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                                    },
                                },
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'OrderStateTransitionError' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'errorCode' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'transitionError' },
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'fromState' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'toState' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<TransitionToStateMutation, TransitionToStateMutationVariables>;
export const SetShippingMethodDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'SetShippingMethod' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
                            },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'setOrderShippingMethod' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'shippingMethodId' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'TestOrderFragment' },
                                },
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'ErrorResult' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'errorCode' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TestOrderFragment' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Order' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotal' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shipping' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shippingWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'totalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'currencyCode' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'couponCodes' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discounts' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'adjustmentSource' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'payments' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'transactionId' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'method' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceChangeSinceAdded' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'unitPriceWithTaxChangeSinceAdded' },
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'proratedUnitPriceWithTax' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'productVariant' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'discounts' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'adjustmentSource' },
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shippingLines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'shippingMethod' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'identifier' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'history' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'data' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<SetShippingMethodMutation, SetShippingMethodMutationVariables>;
export const AddItemToOrderDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'AddItemToOrder' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'productVariantId' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'quantity' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'addItemToOrder' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'productVariantId' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'productVariantId' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'quantity' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'quantity' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'TestOrderFragment' },
                                },
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'ErrorResult' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'errorCode' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                                        ],
                                    },
                                },
                                {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                        kind: 'NamedType',
                                        name: { kind: 'Name', value: 'InsufficientStockError' },
                                    },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'quantityAvailable' },
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'order' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'FragmentSpread',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'TestOrderFragment',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TestOrderFragment' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Order' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotal' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shipping' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shippingWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'totalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'currencyCode' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'couponCodes' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discounts' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'adjustmentSource' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'payments' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'transactionId' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'method' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceChangeSinceAdded' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'unitPriceWithTaxChangeSinceAdded' },
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'proratedUnitPriceWithTax' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'productVariant' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'discounts' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'adjustmentSource' },
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shippingLines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'shippingMethod' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'identifier' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'history' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'data' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<AddItemToOrderMutation, AddItemToOrderMutationVariables>;
export const GetOrderByCodeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetOrderByCode' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'code' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderByCode' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'code' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'code' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'TestOrderFragment' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TestOrderFragment' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Order' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotal' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shipping' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shippingWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'totalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'currencyCode' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'couponCodes' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discounts' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'adjustmentSource' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'payments' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'transactionId' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'method' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceChangeSinceAdded' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'unitPriceWithTaxChangeSinceAdded' },
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'proratedUnitPriceWithTax' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'productVariant' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'discounts' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'adjustmentSource' },
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shippingLines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'shippingMethod' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'identifier' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'history' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'data' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetOrderByCodeQuery, GetOrderByCodeQueryVariables>;
export const GetActiveOrderDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetActiveOrder' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'activeOrder' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'TestOrderFragment' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'TestOrderFragment' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Order' } },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotal' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'subTotalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shipping' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'shippingWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'totalWithTax' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'currencyCode' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'couponCodes' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discounts' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'adjustmentSource' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'payments' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'transactionId' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'method' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'linePriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPrice' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceWithTax' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'unitPriceChangeSinceAdded' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'unitPriceWithTaxChangeSinceAdded' },
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'proratedUnitPriceWithTax' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'productVariant' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'discounts' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'adjustmentSource' },
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'amountWithTax' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shippingLines' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'shippingMethod' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'identifier' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'history' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'data' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetActiveOrderQuery, GetActiveOrderQueryVariables>;
