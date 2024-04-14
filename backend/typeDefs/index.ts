import {mergeTypeDefs} from "@graphql-tools/merge";


// TypeDefs -- schemas
import ownerTypeDef from "./ownerTypedefs";


// const mergedTypeDefs = mergeTypeDefs([
//     ownerTypeDef,
// ])

const mergedTypeDefs = {
    ...ownerTypeDef
}

export default mergedTypeDefs;