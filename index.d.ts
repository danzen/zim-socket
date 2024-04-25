
declare namespace zim {

	export class Socket extends zim.EventDispatcher {
		constructor(server: string, appName: string, roomName?: string, maxPeople?: number, fill?: boolean, initObj?: {})
		changeRoom(appName: string, roomName?: string, maxPeople?: number, fill?: boolean, initObj?: {}): void
		requestTime(): void
		requestSync(): void
        on(event:string, listener:Function): void 
        off(event:string, listener:Function): void 
        offAll(): void 
        setProperty(propertyName:string, propertyValue:string|number|boolean): void
        setProperties(objectOfPropertiesToSet: {}): void 
		getMyProperty(propertyName: string): any
		getMyData(): {}
		getOtherProperty(id: string, propertyName: string): any
		getOtherData(id: string): {}
		getSenderProperty(propertyName: string): any
		getSenderData(): {}
		getProperties(propertyName: string): [any]
		getData(): {}
		getLatestValue(propertyName: string): any
		getLatestTime(propertyName: string): number
		getLatestValueID(propertyName: string): string
		getLatestProperties(propertyName: string): [any]
		appendToHistory(someText: string): void
		clearHistory(): void
		dispose(): void
	}

}

export = zim