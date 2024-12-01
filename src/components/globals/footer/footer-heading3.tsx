interface FooterHeading3Props {
    children: React.ReactNode
}

const FooterHeading3 = ({children}: FooterHeading3Props) => {
    return ( 
        <h3 className="text-slate-100 text-lg xs:text-xl mb-3 font-semibold uppercase">
            {children}
        </h3>
     );
}
 
export default FooterHeading3;