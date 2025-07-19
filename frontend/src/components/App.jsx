import React, { useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('')
  const [job, setJob] = useState({ prompt: '', gpu: '', speed: '' })
  const [response, setResponse] = useState(null)

  const checkBackend = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/coolbeans')
      const data = await res.json()
      setMessage(data.message)
    } catch (err) {
      setMessage('❌ Failed to reach backend')
    }
  }

  const submitJob = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job),
      })
      const data = await res.json()
      setResponse(data)
    } catch (err) {
      setResponse({ error: 'Submission failed' })
    }
  }

  return (
    <div className="p-10 max-w-xl mx-auto space-y-6">
      <button
        onClick={checkBackend}
        className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
      >
        Check CoolBeans
      </button>
      {message && (
        <div className="text-green-500 font-bold">{message}</div>
      )}

      <form onSubmit={submitJob} className="space-y-4 border-t pt-6">
        <h2 className="text-xl font-bold">Submit a Job</h2>
        <input
          type="text"
          placeholder="Prompt"
          className="w-full p-2 border rounded"
          value={job.prompt}
          onChange={(e) => setJob({ ...job, prompt: e.target.value })}
        />
        <input
          type="text"
          placeholder="GPU (e.g. 4090)"
          className="w-full p-2 border rounded"
          value={job.gpu}
          onChange={(e) => setJob({ ...job, gpu: e.target.value })}
        />
        <input
          type="text"
          placeholder="Speed (e.g. 1x)"
          className="w-full p-2 border rounded"
          value={job.speed}
          onChange={(e) => setJob({ ...job, speed: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Job
        </button>
      </form>

      {response && (
        <div className="bg-gray-100 p-4 rounded text-sm space-y-2">
          <div><strong>Message:</strong> {response.message}</div>
          {response.job && (
            <>
              <div><strong>Prompt:</strong> {response.job.prompt}</div>
              <div><strong>GPU:</strong> {response.job.gpu}</div>
              <div><strong>Speed:</strong> {response.job.speed}</div>
              <div><strong>Cost:</strong> {response.job.cost} credits</div>
            </>
          )}
          {response.error && <div className="text-red-500">{response.error}</div>}
        </div>
      )}
    </div>
  )
}
