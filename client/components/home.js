import React, { useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Category from './categoryList'
import TaskList from './taskItem'

const Home = () => {
  const [categoryList, setCategoryList] = React.useState([])
  const [taskList, setTaskList] = React.useState([])
  const { category } = useParams()

  useEffect(() => {
    axios('/api/v1/categories').then(({ data }) => setCategoryList(data))
  }, [])

  useEffect(() => {
    axios(`/api/v1/tasks/${category}`).then(({ data }) => setTaskList(data))
  }, [category])
  return (
    <div>
      <Route exact path="/" component={() => <Category categoryList={categoryList} />} />
      <Route exact path="/:category" component={() => <TaskList taskList={taskList} />} />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
