import { ViewExecutionContext } from "./model";

export type ViewContext< T = Record<string , any> , States = Record<string , any> > = ViewExecutionContext<T , States> & T;