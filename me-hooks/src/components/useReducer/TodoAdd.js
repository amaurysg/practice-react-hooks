import React from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = ({ handleAddToDo }) => {
  //Here called CustomHooks useForm
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  // console.log("Description value",description)

  const handleSubmit = (e) => {
    e.preventDefault();

    //trim() delete spaces in strings
    if (description.trim().length <= 1) {
      //in this case do nothing
      return;
    }

    const newToDo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    //Eject function reset FROM useForm
    handleAddToDo(newToDo);
    reset();
  };

  return (
    <>
      <h4>Add Todo</h4>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder="Description to do..."
          autoComplete="off"
        />
        <button type="submit" className="btn btn-outline-primary mt-1 ">
          Add
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
