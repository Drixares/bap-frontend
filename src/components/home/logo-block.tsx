interface LogoBlockProps {
    title: string;
    srcImg: string;
    size: number;
}

const LogoBlock = ({ title, srcImg, size }: LogoBlockProps) => {
    return (
        <div
            className="aspect-square shrink-0 rounded-xl overflow-hidden bg-slate-950 p-1"
            style={{ width: size * 4, height: size * 4 }}
        >
            <img src={srcImg} alt={title} className="w-full h-full object-contain" />
        </div>
    );
};

export default LogoBlock;
