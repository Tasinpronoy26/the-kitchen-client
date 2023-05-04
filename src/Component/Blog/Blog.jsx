import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';

const Blog = () => {


    const [pdf, setPdf] = useState(false);

    const download = () => {

        const capture = document.querySelector('.downl');


        setPdf(true);
        html2canvas(capture).then((canvas) => {
            const imgPdf = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const compoWidth = doc.internal.pageSize.getWidth();
            const compoHeigth = doc.internal.pageSize.getHeight();
            doc.addImage(imgPdf, 'PNG', 0, 0, compoWidth, compoHeigth)
            setPdf(false);
            doc.save('receipt.pdf');
        })

    }



    return (
        <div>
            <div className="min-h-screen">
                <div className='border'>
                    <h1 className='font-bold m-10'>Tell us the differences between uncontrolled and controlled components?</h1>
                    <p className='m-10'>Controlled components in React are those in which form data is handled by the component’s state</p>
                </div>
                <div className='border'>
                    <h1 className='font-bold m-10'>How to validate React props using PropTypes?</h1>
                    <p className='m-10'>Props and PropTypes are an important mechanism for passing information between React components, and we’re going to look into them in great detail here. This tutorial will introduce you to the details about props, passing and accessing props, and passing information to any component using props. However, it’s always a good practice to validate the data we are getting through props by using PropTypes. So, you will also learn how to integrate PropTypes in React.</p>
                </div>
                <div className='border'>
                    <h1 className='font-bold m-10'>Tell us the difference between nodejs and express js.?</h1>
                    <p className='m-10'>In basic terms, it’s JavaScript’s free and open source cross-platform for server-side programming that permits clients to develop web applications rapidly.

                        It is a library for executing JavaScript applications and is used to create server-side programs or network applications. Its basic modules are engraved in JavaScript. It is generally utilized for server applications in real-time.</p>
                </div>
                <div className='border'>
                    <h1 className='font-bold m-10'>What is a custom hook, and why will you create a custom hook??</h1>
                    <p className='m-10'>It can be reused easily, which makes the code cleaner and reduces the time to write the code. </p>
                </div>
                <div className='downl'>
                    <button className='btn w-48 h-8 mb-5 ms-10' onClick={download}>Download</button>
                </div>
            </div>

            
        </div>
    );
};

export default Blog;