import requests from '@/api/request'

const API = {
    CATEGORYLIST_URL: '/product/getBaseCategory',
}

export const reqCategoryList = () => requests.get(API.CATEGORYLIST_URL)