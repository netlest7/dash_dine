export const storeIdGenerator = (ownerEmail:string ,newStore : boolean,noOfStoreCreated :number): string => {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const storeId =   "_" + ownerEmail + "_"+ (newStore ? 1 :  (noOfStoreCreated+1)) + "_:" + date + "/" + (month+1) + "/" + year+ "%"; 
    return storeId
}