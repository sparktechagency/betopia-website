import Image from 'next/image'
import React from 'react'

interface IFeatureProps {
  title: string;
  description: string;
  icon: string;
}

interface IWhyChooseUs {
  description: string;
  imgUrl: string;
  features: IFeatureProps[];

}

interface IWhyChooseUsProps {
  whyChooseUs: IWhyChooseUs
}
const ProductMainWhyChoose: React.FC<IWhyChooseUsProps>  = ({whyChooseUs}) => {
      const { description, imgUrl, features } = whyChooseUs
  return (
    <section className='bg-[#F6934814] py-20'>
    <div className="container ">

      <div className="mb-[50px]">
         <h2 className="section-title text-black text-center pb-6">
              Why you choose <br /><span className="text-primary">Betopia Ecosystem</span>
              </h2>
        <p className="text-center text-[#757575] text-lg lg:w-[50%] mx-auto">{description}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-2!">
                <Image
                  width={56}
                  height={56}
                  src={feature.icon}
                  alt="arrow"
                  className="rounded-xl object-cover"
                />
                <p className="text-[#414042] text-[24px] leading-6 ">
                  {feature.title}
                </p>
              </div>
              <p className="text-[#6B7280] text-[18px] leading-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className=" lg:h-[700px] h-[400px] rounded-2xl shadow-2xl w-full lg:w-[60%] relative">
          <Image
            fill
            objectFit="cover"
            objectPosition="center"
            src={imgUrl}
            alt="arrow"
            className="rounded-xl object-cover h-full w-full"
            unoptimized
          />
        </div>
      </div>
    </div>
    </section>
  )
}

export default ProductMainWhyChoose
