
import { useState } from 'react'
import './index.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Review lecture notes', done: true },
    { id: 2, title: 'Practice React components', done: false },
    { id: 3, title: 'Plan tomorrow’s study session', done: false },
  ])
  const [newTask, setNewTask] = useState('')

  const completed = tasks.filter((task) => task.done).length

  function addTask(event) {
    event.preventDefault()
    if (!newTask.trim()) return

    setTasks([
      ...tasks,
      { id: Date.now(), title: newTask.trim(), done: false },
    ])
    setNewTask('')
  }

  return (
    <main className="app">
      <nav className="navbar">
        <a className="logo" href="#home">✳ orbit<span>notes</span></a>
        <a className="nav-link" href="#planner">My workspace ↗</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">✦ YOUR SPACE TO FOCUS</p>
          <h1>Small steps.<br /><span>Big futures.</span></h1>
          <p className="description">
            A calmer way to study, plan your days, and turn
            your ideas into something amazing.
          </p>
          <a className="primary-button" href="#planner">
            Plan my day ↗
          </a>
          <p className="note">✦ Your journey, at your own pace.</p>
        </div>

        <div className="art">
          <div className="ring ring-one" />
          <div className="ring ring-two" />
          <div className="planet">✳</div>
          <span className="star">✦</span>
          <span className="mint-dot" />
          <span className="art-label label-top">DREAM IT.</span>
          <span className="art-label label-bottom">THEN DO IT.</span>
        </div>
      </section>

      <section className="planner" id="planner">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR WORKSPACE</p>
            <h2>Today's little wins</h2>
            <p className="muted">Every task completed is progress worth celebrating.</p>
          </div>
          <div className="progress-card">
            <span>COMPLETED</span>
            <strong>{completed}<small> / {tasks.length}</small></strong>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${tasks.length ? completed / tasks.length * 100 : 0}%`,
                }}
              />
            </div>
          </div>
        </div>

        <form className="add-form" onSubmit={addTask}>
          <input
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="Add a new study task..."
            aria-label="New study task"
            maxLength={100}
          />
          <button type="submit">+ Add task</button>
        </form>

        <div className="task-list">
          {tasks.map((task) => (
            <label className="task-row" key={task.id}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() =>
                  setTasks(tasks.map((item) =>
                    item.id === task.id
                      ? { ...item, done: !item.done }
                      : item
                  ))
                }
              />
              <span className="task-title">{task.title}</span>
              <span className="task-status">
                {task.done ? 'Completed ✓' : 'In progress'}
              </span>
            </label>
          ))}
        </div>
      </section>

      <footer>
        <a className="logo" href="#home">✳ orbit<span>notes</span></a>
        <p>Made for the things you're becoming.</p>
        <span>© 2026 Orbit Notes</span>
      </footer>
    </main>
  )
}

export default App
