// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Court Order</title>
        <meta name="description" content="Award Winning Family Lawyers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-header flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Court Order Logo" className="h-10 mr-2" />
          <span className="text-xl font-bold">Court Order</span>
        </div>
        <nav>
          <a href="#" className="text-white mx-2">Home</a>
          <a href="#" className="text-white mx-2">Our Team</a>
          <a href="#" className="text-white mx-2">Services</a>
        </nav>
      </header>

      <main>
        <section className="relative text-center">
          <img src="/be-heard.jpg" alt="Be Heard" className="w-full h-auto" />
          <a href="#" className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background text-white px-4 py-2 rounded hover:bg-blue-700">Get in Touch</a>
        </section>

        <div className="bg-background mx-auto px-4">
          <div className="my-8">
            <h1 className="text-3xl font-bold text-center">Know Court Order</h1>
            <p className="text-white mt-4 text-center">Welcome to Court Order, where excellence in family law is not just a commitment, but a reality. We are proud to announce that our dedication to <b>
              </b> providing exceptional legal services has been recognized with a prestigious award in the field of family law.</p>
            <p className="text-header mt-4 text-center">Award Winning Family Lawyers</p>
            <p className="text-white mt-4 text-center">At Court Order, we understand the complexities and sensitivities that come with family law cases. Our team of experienced and compassionate family lawyers is committed to helping clients navigate through <b> 
              </b>the challenges of divorce, child custody, spousal support, and other family-related legal matters. We believe in upholding the highest ethical standards while vigorously advocating for the best interests of our clients.</p>
          </div>

          <div className="grid grid-cols-4 gap-4 items-center bg-background py-8">
          <div className="col-span-1">
            <img src="/first-image.jpg" alt="Detail" className="w-full h-auto" />
          </div>
          <div className="col-span-3 text-white p-4">
            <h2 className="text-2xl font-bold">Experience</h2>
            <p>Our team of family lawyers brings years of experience to the table...</p>
          </div>

          

        </div>
        <div className="grid grid-cols-4 gap-4 items-center bg-background py-8">
        <div className="col-span-3 text-white p-4">
          <h2 className="text-2xl font-bold">Compassion</h2>
          <p>We understand that family law matters can be emotionally charged and difficult to navigate. Our lawyers approach each case with empathy and sensitivity, ensuring that our clients feel supported throughout the legal process.</p>
        </div>
        <div className="col-span-1">
          <img src="/second-image.jpg" alt="Compassionate Consultation" className="w-full h-auto" />
        </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <img src="/first-image.jpg" alt="Detail" className="w-1/4 h-auto" />
            <div className="bg-gray-100 p-4">
              <h2 className="text-2xl font-bold">Experience</h2>
              <p className="text-gray-600 mt-2">Our team of family lawyers brings years of experience to the table...</p>
            </div>
            <div className="bg-gray-100 p-4">
              <h2 className="text-2xl font-bold">Compassion</h2>
              <p className="text-gray-600 mt-2">We understand that family law matters can be emotionally charged...</p>
            </div>
            <div className="bg-gray-100 p-4">
              <h2 className="text-2xl font-bold">Strategic Approach</h2>
              <p className="text-gray-600 mt-2">Our attorneys are skilled strategists who carefully analyze each case...</p>
            </div>
          </div>

          {/* Placeholders for images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/first-image.jpg" alt="Detail" className="w-full h-auto" />
            <img src="/second-image.jpg" alt="Detail" className="w-full h-auto" />
            <img src="/third-image.jpg" alt="Detail" className="w-full h-auto" />
          </div>
        </div>
      </main>
    </>
  )
}
