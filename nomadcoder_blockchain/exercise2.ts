// LocalStorage API: Use abstract classes and generics.
interface LStorage<T> {
    [key: string]: T
}

abstract class LocalStorageAPI<T> {
    protected storage: LStorage<T>

    constructor() {
        this.storage = {}
    }

    abstract setItem(key: string, value: T): void
    abstract getItem(key: string): T
    abstract removeItem(key: string): void
    abstract clear(): void
}

class LocalStorage extends LocalStorageAPI<string> {
    constructor() {
        super()
    }
    setItem(key: string, value: string) {
        this.storage[key] = value
    }
    getItem(key: string) {
        return this.storage[key]
    }
    removeItem(key: string) {
        delete this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}

// Geolocation API: implements와 overloading을 사용하세요.
type SuccessFn = (position: GeolocationPosition) => void
type ErrorFn = (error: GeolocationPositionError) => void
type GetCurrentPosition = {
    (success: SuccessFn): void
    (success: SuccessFn, error: ErrorFn): void 
    (success: SuccessFn, error: ErrorFn, options: Options): void
}
type WatchPosition = {
    (success: SuccessFn): number
    (success: SuccessFn, error: ErrorFn): number 
    (success: SuccessFn, error: ErrorFn, options: Options): number
}
interface Options {
    maximumAge?: number
    timeout?: number
    enableHighAccuracy?: boolean
}
interface GeolocationAPI {
    getCurrentPosition: GetCurrentPosition
    watchPosition: WatchPosition
    clearWatch: (id: number) => void
}

class Geolocator implements GeolocationAPI {
    getCurrentPosition: GetCurrentPosition = (
        success: SuccessFn, error?: ErrorFn, options?: Options) => {
        // 구현부   
    }
    watchPosition: WatchPosition = (
        success: SuccessFn, error?: ErrorFn, options?: Options) => {
        // 구현부   
        return 1 // 에러를 없애기 위해 임의의 숫자 리턴
    }
    clearWatch(id: number) {
        // 구현부   
    }
}