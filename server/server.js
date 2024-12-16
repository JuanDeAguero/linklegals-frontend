require("dotenv").config()
const OpenAI = require("openai")
const express = require("express")
const { OPENAI_API_KEY, ASSISTANT_ID } = process.env

const app = express()
app.use(express.json())

const openai = new OpenAI({ apiKey: OPENAI_API_KEY })
const assistantId = ASSISTANT_ID

let pollingInterval

const createThread = async () => {
    console.log("Creating a new thread...")
    const thread = await openai.beta.threads.create()
    return thread
}

const addMessage = async (threadId, message) => {
    console.log("Adding a new message to thread: " + threadId)
    const response = await openai.beta.threads.messages.create(
        threadId,
        {
            role: "user",
            content: message
        }
    )
    return response
}

const runAssistant = async (threadId) => {
    console.log("Running assistant for thread: " + threadId)
    const response = await openai.beta.threads.runs.create(
        threadId,
        {
            assistant_id: assistantId
        }
    )
    console.log(response)
    return response
}

const checkingStatus = async (res, threadId, runId) => {
    
}