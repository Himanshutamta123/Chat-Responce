import React from "react";
import './Message.css'

const Message = () => {
  const data = {
    title: "API Definition and Usage",
    create_time: 1682332604.419622,
    update_time: 1682332623.0,
    mapping: {
      "c7800354-73ac-460c-8c5f-61b0fcb81919": {
        id: "c7800354-73ac-460c-8c5f-61b0fcb81919",
        message: {
          id: "c7800354-73ac-460c-8c5f-61b0fcb81919",
          author: { role: "system", metadata: {} },
          create_time: 1682332604.419625,
          content: { content_type: "text", parts: [""] },
          end_turn: true,
          weight: 1.0,
          metadata: {},
          recipient: "all",
        },
        parent: "18d79788-2670-497a-b555-cc8379ef503b",
        children: ["9563a0f1-fd17-4d39-8409-dd1cf9482df7"],
      },
      "18d79788-2670-497a-b555-cc8379ef503b": {
        id: "18d79788-2670-497a-b555-cc8379ef503b",
        children: ["c7800354-73ac-460c-8c5f-61b0fcb81919"],
      },
      "9563a0f1-fd17-4d39-8409-dd1cf9482df7": {
        id: "9563a0f1-fd17-4d39-8409-dd1cf9482df7",
        message: {
          id: "9563a0f1-fd17-4d39-8409-dd1cf9482df7",
          author: { role: "user", metadata: {} },
          create_time: 1682332604.421555,
          content: { content_type: "text", parts: ["what is api "] },
          weight: 1.0,
          metadata: { timestamp_: "absolute" },
          recipient: "all",
        },
        parent: "c7800354-73ac-460c-8c5f-61b0fcb81919",
        children: ["4469a470-3fa0-4694-8ec9-8d6916d049b8"],
      },
      "4469a470-3fa0-4694-8ec9-8d6916d049b8": {
        id: "4469a470-3fa0-4694-8ec9-8d6916d049b8",
        message: {
          id: "4469a470-3fa0-4694-8ec9-8d6916d049b8",
          author: { role: "assistant", metadata: {} },
          create_time: 1682332621.341285,
          content: {
            content_type: "text",
            parts: [
              "API stands for Application Programming Interface. An API is a set of rules, protocols, and tools that enables different software applications to communicate and interact with each other. It defines how software components should interact and exposes certain functionality of a software application to other applications or developers.\n\nAPIs are used in various contexts, such as web development, mobile app development, and software integration. For example, a company might offer an API that allows developers to integrate their software with the company's platform, enabling users to access the platform's features and data through the developer's application.\n\nAPIs can be classified into different types based on their usage, such as web APIs, which are used for web-based applications, and operating system APIs, which are used for accessing the features of an operating system. APIs can also be classified based on the method of communication, such as RESTful APIs, which use HTTP requests to retrieve data or perform operations, and SOAP APIs, which use XML messages to perform similar tasks.",
            ],
          },
          end_turn: true,
          weight: 1.0,
          metadata: {
            model_slug: "text-davinci-002-render-sha",
            finish_details: { type: "stop", stop: "<|im_end|>" },
            timestamp_: "absolute",
          },
          recipient: "all",
        },
        parent: "9563a0f1-fd17-4d39-8409-dd1cf9482df7",
        children: [],
      },
    },
    moderation_results: [],
    current_node: "4469a470-3fa0-4694-8ec9-8d6916d049b8",
  };

  const newArray = []
  for( const key in data.mapping){
    if(key === "4469a470-3fa0-4694-8ec9-8d6916d049b8"){
      newArray.push(data.mapping[key])
    }
  }

  
  function forData(number) {
    let num = 0
    for(const key in data.mapping){
        if(key === number){
          newArray.push(data.mapping[key])
        }
      }
      if(newArray.length < 4){
        forData(newArray[num++].parent)
      }
  }
  forData(newArray[0].parent)
  console.log(newArray)

  const h2 = newArray[0].message.content.parts[0];
  const h3 = newArray[1].message.content.parts[0];

  return (
    <div className="chat">
    <h4 className="chat_message">{h3}</h4>
    <h4 className="chat_message">{h2}</h4>
    </div>
  );
};

export default Message;
