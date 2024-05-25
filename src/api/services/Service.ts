/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegisterUser } from '../models/RegisterUser';
import type { Result } from '../models/Result';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import {User} from "@/api/models/User";
export class Service {
    /**
     * 新增
     * 需要传入JSON
     * @param entity entity
     * @returns Result OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUsingPost(
        entity: User,
    ): CancelablePromise<Result | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user',
            body: entity,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 修改
     * 需要传入JSON
     * @param entity entity
     * @returns Result OK
     * @returns any Created
     * @throws ApiError
     */
    public static editUsingPut(
        entity: User,
    ): CancelablePromise<Result | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user',
            body: entity,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取全部
     * 无需参数
     * @returns Result OK
     * @throws ApiError
     */
    public static getAllUsingGet(): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/all',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * allllll
     * @returns Result OK
     * @throws ApiError
     */
    public static allllllUsingGet(): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/allll',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 解析token
     * 需传入token
     * @param token token
     * @returns Result OK
     * @throws ApiError
     */
    public static getInfoUsingGet(
        token: string,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/info',
            query: {
                'token': token,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 是否登录
     * @returns Result OK
     * @throws ApiError
     */
    public static isLoginUsingGet(): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/is_login',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 登录
     * 传入account和password
     * @param user user
     * @returns Result OK
     * @returns any Created
     * @throws ApiError
     */
    public static loginUsingPost(
        user: User,
    ): CancelablePromise<Result | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/login',
            body: user,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 登出
     * @returns Result OK
     * @returns any Created
     * @throws ApiError
     */
    public static logoutUsingPost(): CancelablePromise<Result | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/logout',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 分页获取
     * 需要传入当前页和页大小
     * @param currentPage currentPage
     * @param pageSize pageSize
     * @returns Result OK
     * @throws ApiError
     */
    public static getPageUsingGet(
        currentPage?: number,
        pageSize?: number,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/page_without_condition',
            query: {
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 注册
     * 传入account、password、checkPassword
     * @param userRegisterRequest userRegisterRequest
     * @returns Result OK
     * @returns any Created
     * @throws ApiError
     */
    public static registerUsingPost(
        userRegisterRequest: User,
    ): CancelablePromise<Result | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/register',
            body: userRegisterRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 按id获取
     * 需传入id
     * @param id id
     * @returns Result OK
     * @throws ApiError
     */
    public static getByIdUsingGet(
        id: number,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 删除
     * 需要传入路径变量id
     * @param id id
     * @returns Result OK
     * @throws ApiError
     */
    public static removeUsingDelete(
        id: number,
    ): CancelablePromise<Result> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
