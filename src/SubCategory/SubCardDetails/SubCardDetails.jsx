import { BiSearch } from 'react-icons/bi';
import img from '../../assets/image/showCoverImage.jpg'
import img2 from '../../assets/image/simple.webp'

const SubCardDetails = () => {
    return (
        <div>
            <div className="bg-[#10147E] flex items-center space-x-2 text-[#fff] px-20 py-2 text-sm">
                <p>Home</p>
                <p>/</p>
                <p>Area Studies</p>
                <p>/</p>
                <p>Article Details</p>
            </div>

            <div className="py-8 lg:px-20 md:px-16 sm:px-12 px-12 bg-[#ffffff]">
                <div className='flex'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='px-8'>
                        <h2 className='text-xl title-text text-[#10147E] pb-4'>Debatte: Journal of Contemporary Central and Eastern Europe </h2>
                        <p className='text-[#717171]'>Volume 22, 2014 - Issue 1</p>
                        <p className='py-3 text-[#717171]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos odio modi iste ad pariatur, ab possimus, velit, facere eaque itaque labore perspiciatis. Quaerat, necessitatibus natus!</p>
                        <div className='flex items-center space-x-2 mt-4'>
                            <button className='py-2 px-4 bg-[#10147E] text-white rounded hover:bg-[#006DB4] duration-300'>Journal homepage</button>
                            <button className='py-2 px-4 bg-[#10147E] text-white rounded hover:bg-[#006DB4] duration-300'>Save the Article</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8 lg:px-20 md:px-16 sm:px-12 px-12 bg-[#EEEEEE] border-t">
                <div className='w-full flex'>

                    <div className='space-y-2'>
                        <div>
                            <p className='text-2xl'>692</p>
                            <p className='border-b'>Views</p>
                        </div>

                        <div>
                            <p className='text-2xl'>5</p>
                            <p className='border-b'>CrossRef citations to date</p>
                        </div>

                        <div>
                            <p className='text-2xl'>1</p>
                            <p className='border-b'>Altmetric</p>
                        </div>

                    </div>

                    <div className='lg:px-28 relative'>
                        <p className='text-[#5f5e5e] text-sm py-2'>Articles</p>
                        <h2 className='text-2xl font-bold  title-text'>
                            The Great Friendship: Geopolitical Fantasies About the Russia/Europe Alliance in the Early Putin Era (2000–2008) – The Case of Alexander Dugin
                        </h2>
                        <p className='py-2 font-medium'>Dmitry Shlapentokh</p>
                        <div className='flex items-center space-x-2 text-[#6d6d6d]'>
                            <p>Pages 49-79</p>
                            <p>|</p>
                            <p>Published online: 28 Oct 2023</p>
                        </div>
                        <div className='flex items-center space-x-4 text-[#10147E] py-2'>
                            <a href=''>Cite this article</a>
                            <a href=''>https://doi.org/10.1080/00014788.2013.873218</a>
                        </div>


                        <div className='flex items-center title-text absolute bottom-[-32px] text-sm space-x-4 cursor-pointer'>
                            <p className='py-4 px-4 bg-[#10147E] text-white rounded title-text'>Full Article</p>
                            <p className='py-4 px-4 hover:bg-[#10147E] hover:text-white rounded duration-300'>Figures & data</p>
                            <p className='py-4 px-4 hover:bg-[#10147E] hover:text-white rounded duration-300'>References </p>
                            <p className='py-4 px-4 hover:bg-[#10147E] hover:text-white rounded duration-300'>Citations</p>
                            <p className='py-4 px-4 hover:bg-[#10147E] hover:text-white rounded duration-300'>Metrics</p>
                            <p className='py-4 px-4 hover:bg-[#10147E] hover:text-white rounded duration-300'>Reprints & Permissions</p>
                        </div>

                    </div>

                </div>
            </div>

            <div className="py-8 lg:px-20 md:px-16 sm:px-12 px-12 relative">
                <div className='flex w-full'>

                    <div className='lg:w-1/3'>
                        <img src={img2} alt="" />
                    </div>

                    <div className='lg:w-3/4'>
                        <h2 className='text-3xl font-bold title-text text-[#0e0f28]'>Abstract</h2>
                        <p className='py-3 text-lg text-[#050505]'>
                            In post Soviet Society Europe emerged as a geographical symbol of everything positive that the end of the Soviet regime had brought to post Soviet urban Russians. At the same time the USA became the symbol of all that was negative in these changes. These attitudes had been shaped during the first years of Putin’s tenure. The views of Alexander Dugin, the seminal Russian philosopher, could here be an example.
                        </p>

                        <div className='flex items-center space-x-2 py-4'>
                            <p className='flex items-center font-bold text-[#262626]'><BiSearch></BiSearch><span className='px-1'>Keywords</span></p>
                            <div className='flex items-center space-x-2 text-sm'>
                                <p className='bg-[#006DB4] text-white rounded-md px-2 py-1 cursor-pointer hover:bg-[#10147E] duration-300'>Dugin</p>
                                <p className='bg-[#006DB4] text-white rounded-md px-2 py-1 cursor-pointer hover:bg-[#10147E] duration-300'>post Soviet</p>
                                <p className='bg-[#006DB4] text-white rounded-md px-2 py-1 cursor-pointer hover:bg-[#10147E] duration-300'>Europe</p>
                                <p className='bg-[#006DB4] text-white rounded-md px-2 py-1 cursor-pointer hover:bg-[#10147E] duration-300'>the USA</p>
                            </div>

                        </div>

                        <div>
                            <h2 className='text-3xl font-bold title-text text-[#0e0f28]'>Notes</h2>

                            <div className='py-6 space-y-4 text-lg text-[#050505]'>
                                <p>
                                    1. On the general assessment of modern Neo-Eurasianism, see, for example, Laruelle (Citation2007). This work was later published in English.
                                </p>
                                <p>2. There is no comprehensive biography of Dugin’s life. About his early career see Shenfield (Citation2001).</p>
                                <p>3. See, for example, Clowes (Citation2011).</p>
                                <p>4. For an example of recent Umland articles on Dugin, see Umland (Citation2009a, Citation2009b).</p>
                                <p>5. See, for example, Shekhovtsov (Citation2008).</p>
                                <p>6. On Dugin’s vision of empire as a divine/sacred entity, see Hollwerth (Citation2008) and Fichtner (Citation2008).</p>
                                <p>7. Dugin’s appreciation of the European right includes some western researchers who regard him not so much as a traditional Eurasianist/neo-Eurasianist but as a Russian modification of the European right. See, for example, Laurelle (Citation2008).</p>
                                <p>8. On Dugin’s view on “conservative revolution”, see Senderov (Citation2008) and Kipp (Citation2002).</p>
                                <p>9. Iran was especially important in Dugin and the Russian elite’s general design. In their view, the alliance with Iran would ensure Russian domination in the Middle East and access to warm waters, the dream that the Russian elite have entertained since the time of the tsars..</p>
                                <p>10. No author, “Po sushchestvu nam ob’iavlena voina …,” Evraziia, September 3, Citation2004.</p>
                                <p>11. No author given, “Ukraina posle vyborov veroiatnye ugrozy,” Evraziia, 26/XII-Citation2004.</p>
                                <p>12. These ideas have a sort of Eurasian flavour, and it is apparent that is the reason Dugin placed it at this site.</p>
                                <p>13. Dugin’s appreciation of the Serbs was due mostly to the fact that they were at war with the US. In most cases Dugin viewed “new Europe,” including Slavic “new Europe,” with scepticism or even hostility and implicitly excluded it from a Russo-European alliance, at least from playing a leading role in it. At the same time, for the racist/new-facist right, often foreign to any imperial fantasies, all white Europeans, including Slavs, are brothers who should be united against a common threat from racially foreign Asiatics and Africans.</p>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/3 ml-6'>
                        <h2 className='text-xl font-bold title-text text-[#0e0f28]'>Related Research</h2>
                        <div className='my-4 bg-[#EEEEEE]'>
                            <p className='text-xl font-bold py-2 px-4 bg-[#6CD775]'>Recommended articles</p>
                             <p className='py-4 px-4'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur, inventore nemo recusandae esse dolor. Praesentium non aliquam labore molestias voluptate ullam illum, amet quasi veniam ducimus mollitia facere autem ipsum blanditiis cum doloribus recusandae rem repellat, quos assumenda tenetur sed. Dolore explicabo consectetur, id atque maiores odit praesentium aspernatur asperiores vel ea similique assumenda at in architecto optio iste!
                             </p>
                        </div>

                        <div className='my-4 bg-[#EEEEEE]'>
                            <p className='text-xl font-bold py-2 px-4 text-white text-center bg-[#10147E] '>People also read</p>
                             <p className='py-4 px-4'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur, inventore nemo recusandae esse dolor. Praesentium non aliquam labore molestias voluptate ullam illum, amet quasi veniam ducimus mollitia facere autem ipsum blanditiis cum doloribus recusandae rem repellat, quos assumenda tenetur sed. Dolore explicabo consectetur, id atque maiores odit praesentium aspernatur asperiores vel ea similique assumenda at in architecto optio iste!
                             </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SubCardDetails;