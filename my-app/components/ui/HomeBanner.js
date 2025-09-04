import React from 'react';
import Image from 'next/image';
import scrollBall from '@/utils/scrollBall';
const HomeBanner = (props) => {
    return (
        <div>
            <section className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-blue-300 text-white pt-28 md:pt-32 px-6 md:px-16">
                <div className="max-w-xl space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Designing and building <br /> platforms for your <br />
                        <span className="text-lime-300">AI Bot Development</span>
                    </h1>
                    <p className="text-lg text-gray-200">
                        We are one of the leading digital agencies for start-ups and large
                        enterprises and everything in between. Zebrank is here to fuel your success.
                    </p>
                </div>

                <div className="mt-10 md:mt-0">
                    <Image
                        src="/hero-illustration.png"
                        alt="Hero Illustration"
                        width={500}
                        height={500}
                        className="drop-shadow-lg"
                    />
                </div>
            </section>

            {/* Client Logos */}
            <section className="py-20 px-6 md:px-16">
                <h2 className="text-center text-2xl font-semibold mb-10 text-gray-800">
                    Trusted by leading brands
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
                    <Image src="/logos/sony.png" width={100} height={60} alt="Sony" />
                    <Image src="/logos/abc.png" width={100} height={60} alt="ABC" />
                    <Image src="/logos/soothe.png" width={100} height={60} alt="Soothe" />
                    <Image src="/logos/usc.png" width={100} height={60} alt="USC" />
                    <Image src="/logos/nbc.png" width={100} height={60} alt="NBC" />
                    <Image src="/logos/honda.png" width={100} height={60} alt="Honda" />
                    <Image src="/logos/tbs.png" width={100} height={60} alt="TBS" />
                    <Image src="/logos/science37.png" width={100} height={60} alt="Science37" />
                </div>
            </section>
            <p>kk</p>
            <scrollBall/>
        </div>
    );
};

export default HomeBanner;