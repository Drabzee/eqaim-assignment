export type TSteps = {
    [key: `step${number}`]: {
        carryString: string,
        sumString: string,
    }
};

export type TStepsSum = {
    num1: string,
    num2: string,
    steps: TSteps
}

export type ApiResponseSuccess<T> = {
    status: number,
    data: {
        success: true,
        data: T
    }
}

export type ApiResponseError = {
    status: number,
    data: {
        success: false,
        errorMsg: string
    }
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;