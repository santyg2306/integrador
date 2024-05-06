import Image from "next/image";
import { TopMenu } from "@/components";
import { Footer } from "@/components/ui/footer_/Footer";
export default function authLayout ({children }: {
    children: React.ReactNode;

}) {
    return(
        <main className="">
        
           
        {children}
        
        
        </main>
    )

}   
