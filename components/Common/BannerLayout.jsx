
const BannerLayout = ({ children }) => {
    return (
        <div
        className="h-full space-y-2 p-8 card_stylings transition"
            style={{
                background: 'url(images/background.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            <div className=" inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-Black/5 backdrop-blur-sm w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BannerLayout