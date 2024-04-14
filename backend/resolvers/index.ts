import {mergeResolvers} from '@graphql-tools/merge'
import ownerResolvers from './ownerResolvers'


// const mergedResolvers = mergeResolvers([
//     ownerResolvers,
// ])

const mergedResolvers = {
     ...ownerResolvers
}

export default mergedResolvers;