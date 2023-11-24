'use client';

import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { barChartData } from '../../constants';

const HomeHero = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
        const tabletMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');

        const checkMediaQueries = () => {
        setIsMobile(mobileMediaQuery.matches);
        setIsTablet(tabletMediaQuery.matches);
        };

        checkMediaQueries(); // Initial check

        const handleResize = () => {
        checkMediaQueries();
        };

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <section className='padding-t min-h-screen max-container items-center justify-center w-full flex xl:flex-row xl:flex-wrap flex-col gap-10'>
        <div>
            <h1>Total verified casualty data in Hamas</h1>
            <Chart
                options={barChartData.options}
                series={barChartData.series}
                type="bar"
                width={isMobile ? '350' : '500'}
            />
        </div>
        <div>
            <h1>Casualty data in Hamas Gaza</h1>
            <Chart
                options={barChartData.options}
                series={barChartData.series}
                type="bar"
                width={isMobile ? '350' : '500'}
            />
        </div>

        <div>
            <h1>Casualty data in Hamas Gaza</h1>
            <Chart
                options={barChartData.options}
                series={barChartData.series}
                type="bar"
                width={isMobile ? '350' : '500'}
            />
        </div>

        <div>
            <h1>Casualty data in Hamas Gaza</h1>
            <Chart
                options={barChartData.options}
                series={barChartData.series}
                type="bar"
                width={isMobile ? '350' : '500'}
            />
        </div>
    </section>
  )
}

export default HomeHero