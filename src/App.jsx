import React from 'react'
import Cards from './components/Cards'

function App() {

  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      nameOfCompany: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      nameOfCompany: "Apple",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      nameOfCompany: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      nameOfCompany: "Amazon",
      datePosted: "3 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$52/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      nameOfCompany: "Netflix",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      nameOfCompany: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map((elem, idx) => {

        return <div key={idx}>
          <Cards logo={elem.brandLogo} company={elem.nameOfCompany} date={elem.datePosted} post={elem.post} tagOne={elem.tag1} tagTwo={elem.tag2} pay={elem.pay} loca={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App
