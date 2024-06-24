const Footer = () => {
    return (
        <>
            <div className="footer flex flex-col md:flex-row justify-between px-8 py-4 items-center gap-[20px] md:gap-[0px] bg-black">
                <div className="footer-copyright">
                    <p className="text-white text-center md:text-left">
                        © Copyright <span>{new Date().getFullYear()}</span>.
                        Handcrafted by Abdul Latif
                    </p>
                </div>
            </div>
        </>
    )
}
export default Footer
