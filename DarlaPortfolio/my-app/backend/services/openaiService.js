// const axios = require('axios');
// require('dotenv').config(); 
// const generateSample = async (projectTitle, toolDescription) => {
//     const prompt = `
//     Given the project titled "${projectTitle}" with the description "${toolDescription}",
//     as an expert in this field, your task is to compile a comprehensive Q&A list that sheds light on the nuances of the topic.
//     Each question and answer should be encapsulated in a separate JSON object, illustrating common inquiries related to the project alongside 
//     thorough, insightful responses. These should unveil in-depth understanding, practical advice, and showcase advanced techniques or knowledge.

    
// ]   Example of expected formatting:
//     {"messages":[{"role":"system","content":"Discussing pivotal techniques in project management."},{"role":"user","content":"What is a pivotal technique for addressing [specific aspect of the project]?"},{"role":"assistant","content":"A crucial technique is..."}]}
//     {"messages":[{"role":"system","content":"Exploring the impact of project aspects on related fields."},{"role":"user","content":"How does [another aspect of the project] significantly impact [related field or aspect]?"},{"role":"assistant","content":"This impact is significant because..."}]}
//     ...
//     Ensure a rich diversity in the questions to span the entire breadth of the project's scope, and the responses should be detailed, providing actionable insights or elucidating the latest practices in the field.
//     Remember, the goal is to furnish questions that are likely to be asked by those interested in or working on similar projects, and to offer answers that are not only accurate but also enrich the reader's understanding of the subject matter.
//     `;


//     const body = {
//         model: "gpt-3.5-turbo",
//         messages: [
//             {
//                 role: "system",
//                 content: prompt
//             },
//             {
//                 role: "user",
//                 content: "Generate the samples."
//             }
//         ],
//         max_tokens: parseInt(process.env.RESPONSE_SIZE, 10) 

//     };

//     try {
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', body, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         // Directly use the data if it's already an object
//         const samples = response.data.choices[0].message.content.samples; // assuming 'samples' is the key where data is held
//         return samples;
//     } catch (error) {
//         console.error("Error calling OpenAI API:", error);
//         throw error;
//     }
// };

// module.exports = { generateSample };