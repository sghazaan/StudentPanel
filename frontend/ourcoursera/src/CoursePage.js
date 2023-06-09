import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
const CoursePage = () => {
    const navigate = useNavigate();
    const { id, courseId } = useParams();
    const [course, setCourse] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const[quizzes, setQuizzes] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
       // console.log("useEffect called")
            fetch(`http://localhost:3001/students/:${id}/courses/:${courseId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setCourse(data);
        }
        )
        .catch(error => console.error(error));
    }, []);

//view comments request
    useEffect(() => {
        //  console.log("useEffect called for comments")
             fetch(`http://localhost:3001/students/:${id}/:${courseId}/viewComments`, {
             headers: {
                 Authorization: `Bearer ${token}`
             }
         })
         .then(response => response.json()) // Parse the response data
         .then(data => {
             setComments(data);
         }
         )
         .catch(error => console.error(error));
     }, [comment]);



//view quizzes
     useEffect(() => {
        // console.log("useEffect called for quizzes")
            fetch(`http://localhost:3001/students/:${id}/:${courseId}/quizzes`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.json()) // Parse the response data
        .then(data => {
            setQuizzes(data);
            // console.log(data)
            quizzes.forEach(quiz => {
                if (quiz.questions === null) {
                //   console.log("Questions array is null");
                } else {
                //   console.log("Questions array is not null");
                }
              });
            //   console.log("hiiii");
        }
        )
        .catch(error => console.error(error));
    }, []);



    const handleGoToCourses = () => {
        navigate(`/${id}/courses`);
    }
    const handleInputChange = (e) => {
        setComment(e.target.value);
    }
    const handleSubmit = async (e) => {
       // e.preventDefault();
        const response = await fetch(`http://localhost:3001/students/:${id}/:${courseId}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ comment })

        })
        .catch(error => console.error(error));
       // console.log(response.status);
       const status = response.status;
       if(status === 200){
        //    console.log("comment placed successfully");
         } else{
                // console.log("comment failed");
            }
    }
    return(
        <div className="container">
            {
                course ? (
                    <div>
                    <div className="d-flex justify-content-end">
                    <button className='my-4 btn btn-success' onClick={handleGoToCourses}>Go Back to All Courses</button>
                    </div>
                    <div>
                    <h1 className="text-center mt-5 ">Course Preview</h1>
                    <div className="card mt-4">
                      <div className="card-body ">
                        <h5 className="card-title text-danger">Course Title: {course.title}</h5>
                        <p className="card-text ">Description: {course.description}</p>
                        <p className="card-text">Duration: {course.duration}</p>
                        <p className="card-text">Price: {course.price}</p>
                        <p className="card-text">Instructor: {course.instructor}</p>
                      </div>
                    </div>
                    </div>
                    <div className="mt-5" >
                        <h4 className="mb-3">Course comments:</h4>
                    {comments.map((item, index) => (
                        <div>
                     <p className= "lead" key={index}> <b>{item.person}:</b></p>
                      <p key={index}> {item.comment}</p>
                      </div>
                           ))}
                  </div>
                    <div className="mt-5 comments d-flex justify-content-center">                   
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                     <input
                       type="text"
                      className="form-control"
                      placeholder="Place your comment..."
                     value={comment}
                   onChange={handleInputChange}
                    style={{ width: '600px' }} 
                         />
                         </div>
                      <div className="form-group mt-2 text-center"> 
                      <button type="submit" className="btn btn-success">Submit</button>
                      </div>
                    </form>
                    </div>



                    <div>
  <h2>Quiz</h2>
  {/* <h3>Hello man</h3> */}
  {/* {quizzes && quizzes.questions && quizzes.questions.map((question, index) => ( */}
  {quizzes && quizzes.map((quiz, index) => (
  <div key={index}>
    <h3>Quiz {index + 1}</h3>
    {quiz.questions && quiz.questions.map((question, questionIndex) => (
      <div key={questionIndex}>
        <h4>Question {questionIndex + 1}</h4>
        <p>{question.question}</p>
        <ul>
          {question.options && question.options.map((option, optionIndex) => (
            <li key={optionIndex}>{option.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
))}

</div>
                    
                   



                    </div>

                ) : (
                    <div>
                    <p>Loading...</p>
                    </div>
                    
                )
            }
     
      </div>


    )   

}
export default CoursePage;