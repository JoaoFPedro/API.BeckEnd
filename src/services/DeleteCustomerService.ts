import prismaClient from "../prisma/Index";
interface DeleteCustomerProps{
    id: string;
}

class DeleteCustomerService{
    async execute({id}: DeleteCustomerProps) {
        if(!id){
            throw new Error("Error: No ID was found.")
        }
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id:id
            }
        })

        if(!findCustomer){
            throw new Error("Client doesn't exist.")
        }
        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })
        return {message: "The client was delete with succes"}

    }
}

export {DeleteCustomerService}