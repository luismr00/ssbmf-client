import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VideoPlaceholder from '../components/tutorials/VideoPlaceholder'

const EdgeguardGame = () => {

    const videos = [
        {
            category: 'Combos',
            id: '1'
        },
        {
            category: 'Reaction',
            id: '2'
        },
        {
            category: 'Follow-ups',
            id: '3'
        }
    ]

  return (
    <div className="gradient-bg font-roboto">
        <Navbar />
        <div className='text-white flex flex-col justify-end' style={{backgroundImage: `url(https://via.placeholder.com/1920x1080)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',height: '820px'}}>
            <div className='custom-container mb-28'>
                <b className='text-h1'>Edgeguarding Game</b>
                <p className='text-paragraph mb-6'>Learn advanced techniques and strategies to dominate your opponents.</p>
                {/* <p className='text-paragraph'>Date: 06/20/2024</p> */}
                <div className='flex gap-[16px]'>
                    <div className='bg-white text-black p-2 text-small font-semibold'>Strategy</div>
                    <div className='bg-white text-black p-2 text-small font-semibold'>Kill confirms</div>
                    <div className='bg-white text-black p-2 text-small font-semibold'>Flowchart</div>
                </div>
            </div>
        </div>
        <div className="custom-container text-white">
            <div className='mt-28 mb-16 flex flex-col gap-[5px]'>
                <b className='text-h2'>Table of Contents</b>
                <p className='text-paragraph'>Learn advanced techniques for punishing opponents.</p>
            </div>
            {videos?.map(video => (
                <VideoPlaceholder category={video.category} id={video.id} />
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default EdgeguardGame;
