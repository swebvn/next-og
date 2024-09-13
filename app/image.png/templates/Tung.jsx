export default function Demo({ params }) {
    const bg_image = params.get('bg_image')
    const image_charm = params.get('image_charm')
    const image_bg_charm = params.get('image_bg_charm')
    const title1 = params.get('title1') || "Billy Even's"
    const title2 = params.get('title2') || 'FIRST CHRISTMAS'
    const product_image1 = params.get('product_image1')
    const product_image2 = params.get('product_image2')
    const product_image3 = params.get('product_image3')
    const product_image4 = params.get('product_image4')
    const product_image5 = params.get('product_image5')
    const product_image6 = params.get('product_image6')
    const product_image7 = params.get('product_image7')
    const product_image8 = params.get('product_image8')
    const product_image9 = params.get('product_image9')
    const product_image10 = params.get('product_image10')
    const product_image11 = params.get('product_image11')
    return (
        <div tw="flex w-full h-full items-center justify-center">
            <div tw="absolute w-full h-full flex flex-col items-center justify-center" >
                <img src={bg_image} tw="w-full h-full" />
            </div>

            <img src={image_charm} alt="" style={{
                position: 'absolute',
                top: '188px',
                left: '310px',
                width: '880px',
                height: '1123px',
                transform: 'rotate(0deg)',
            }} />

            <img src={image_bg_charm} alt="" style={{
                position: 'absolute',
                top: '368px',
                left: '358px',
                width: '783px',
                height: '697px',
                transform: 'rotate(0deg)',
            }} />

            <img src={product_image1} alt="" style={{
                position: 'absolute',
                top: '595px',
                left: '340px',
                width: '211px',
                height: '213px',
                transform: 'rotate(38.62deg)',
            }} />

            <img src={product_image2} alt="" style={{
                position: 'absolute',
                top: '552px',
                left: '463px',
                width: '211px',
                height: '212px',
                transform: 'rotate(18.7deg)',
            }} />
             <img src={product_image3} alt="" style={{
                position: 'absolute',
                top: '470px',
                left: '736px',
                width: '209px',
                height: '210px',
                transform: 'rotate(111deg)',
            }} />     
            <img src={product_image4} alt="" style={{
                position: 'absolute',
                top: '597px',
                left: '903px',
                width: '219px',
                height: '220px',
                transform: 'rotate(-8.5deg)',
            }} />       
            <img src={product_image5} alt="" style={{
                position: 'absolute',
                top: '685px',
                left: '508px',
                width: '207px',
                height: '208px',
                transform: 'rotate(-21deg)',
            }} />       
            <img src={product_image6} alt="" style={{
                position: 'absolute',
                top: '615px',
                left: '666px',
                width: '203px',
                height: '205px',
                transform: 'rotate(0deg)',
            }} />       
            <img src={product_image7} alt="" style={{
                position: 'absolute',
                top: '820px',
                left: '400px',
                width: '202px',
                height: '203px',
                transform: 'rotate(51deg)',
            }} />       
            <img src={product_image8} alt="" style={{
                position: 'absolute',
                top: '882px',
                left: '560px',
                width: '196px',
                height: '198px',
                transform: 'rotate(0deg)',
            }} />       
            <img src={product_image9} alt="" style={{
                position: 'absolute',
                top: '840pxx',
                left: '672px',
                width: '201px',
                height: '202px',
                transform: 'rotate(152deg)',
            }} />       
            <img src={product_image10} alt="" style={{
                position: 'absolute',
                top: '818px',
                left: '836px',
                width: '211px',
                height: '212px',
                transform: 'rotate(9.5deg)',
            }} />       
            <img src={product_image11} alt="" style={{
                position: 'absolute',
                top: '690px',
                left: '730px',
                width: '211px', 
                height: '212px',
                transform: 'rotate(69deg)',
            }} />                   

            <h1 tw="text-center absolute top-[1070px] left-[597px] text-red-500 text-[60px] font-bold"
                style={{
                    fontFamily: 'BeVietnamPro',
                    color: '#351501',
                }}
            >{title1}</h1>
               <h1 tw="text-center absolute top-[1150px] left-[488px] text-red-500 text-[60px] font-bold"
                style={{
                    fontFamily: 'BeVietnamPro',
                    color: '#351501',
                }}
            >{title2}</h1>
        </div>
    )
}
