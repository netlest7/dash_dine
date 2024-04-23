import { IOwner } from "../db/Schemas/ownerSchema";



declare global {
    namespace Express{
        interface Request{
            owner? : IOwner
        }
    }
}