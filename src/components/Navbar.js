import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import { ModeToggle } from "./Theme-btn"

const Navbar=()=>{
    return(
    <div className="flex items-center justify-between border-b-2 bg-background/50 sticky top-0 backdrop-blur p-4">
           
            <div className="text-lg font-bold">
                 <Link href="/">YogifyTask</Link>

            </div>
           

            <div>
                <ModeToggle/>
            <Link href="/add" className={buttonVariants({ variant: "outline " })}>Add</Link>

            </div>
        
 

    </div>
    )
}

export default Navbar;