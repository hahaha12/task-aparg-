export interface IListType {
    data: DataType[]
    filters: FilterType
    loading: boolean
    error: any
}

export type FilterType = {
    params: FilterParamsType
    count: FilterCountType
}

export type FilterParamsType = {
    limit: string
    order: string
    page_token: string,
    languages: string
}

export type FilterCountType = {
    intervalCount: string
}

export type DataType = {
    accessible: boolean
    additional_data: AdditionalDataType
    tweet_id: string
    author_followers_count: number | null
    author_image_url: string | null
    author_screen_name: string | null
    can_purchase: boolean
    category: string
    cost: string | null
    description: string | null
    domain_cached_large_logo_url: string
    domain_cached_logo_url: string
    domain_host: string
    domain_id: number
    domain_name: string
    duplicatesCount: number
    dynamic_cfscore: DynamicCfscore
    entities_dynamic_cfscore: string | null
    expanded_url: string
    followers_following_ratio: string | null
    friends_count: number | null
    full_text: boolean
    id: number
    imageUrls: string | null
    lang: string
    limited_content: []
    old_score: number
    paywall: boolean
    premium_plan_level: number | null
    publishTime: string
    publishTimeDiff: number
    purchased: boolean
    readCount: number
    registrationRequired: boolean
    score: number
    showPath: string
    title: string
    type: string
    url: string
    user_premium_plans: []
    uuid: string
    uuid_title: string
    visibility: string | null
    _highlight: string | null
    _score: string | null
}

type AdditionalDataType = {
    tweet_id: string
}

type DynamicCfscore = {
    time_point: number,
    value: number
}