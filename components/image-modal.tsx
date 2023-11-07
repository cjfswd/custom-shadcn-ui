import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import Image, { StaticImageData } from 'next/image'

export default function ImageModal({ children, imgLink, aspect }: { children: React.ReactElement, imgLink: string | StaticImageData, aspect: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[35%]">
                <DialogHeader>
                    <DialogTitle>&nbsp;</DialogTitle>
                    <DialogDescription asChild>
                        <div className={"relative w-full " + aspect}><Image src={imgLink} fill={true} alt={""} className="absolute" /></div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}