import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
var accesstoken  = ''
var userid=''
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(" http://localhost:8080/api/product/view");
  const users = await response.json();
  return users;
});

export const signInUser = createAsyncThunk("users/signInUser", async (userDetails) => {
  /*await axios.post("http://localhost:8080/api/auth/signin", userDetails).then((response)=>{
    // console.log('Sign In api response' , response.data);
    
    /*console.log(response);
    console.log(response.data.accessToken);
    accesstoken = response.data.accessToken;
   let obj = {
    status: 200, ...response.data
    }
   console.log(obj)
    return obj;
  // return response.data;
  },(error)=>{alert("Enter the correct details") ;console.log(error)})
 */ try {
      const response = await axios.post("http://localhost:8080/api/auth/signin", userDetails);
      console.log('Sign In api response:- ', response)
      const user = await axios.get("http://localhost:8080/find/getByUsername/"+response.data.username)
      userid = user.data.id
      alert(userid)
      accesstoken = response.data.accessToken;
      alert(accesstoken)
      let obj = {
      status: 200, ...response.data
      }
      return obj;
  } catch (err) {
    console.log(err.response.data)
    let obj = {
      status : 500 , ...err.response.data
    }
    return obj;
  }
});

export const signUpUser = createAsyncThunk("users/signUpUser", async (userDetails) => {
    var [role] = [userDetails.role]
    alert(role)
  alert(userDetails.role)
  let body = {
          name :userDetails.name,
          username: userDetails.username,
          email:userDetails.email,
          password:userDetails.password,
          role:[role],
  }
  try {
     const response =  axios.post("http://localhost:8080/api/auth/signup",body)
     console.log('Sign up api response:- ', response)
     return response.data;
  } catch (err) {
      console.log(err);
      return null;
  }
});

export const addSubject = createAsyncThunk("users/addSubject", async (subjectDetails) => {
  try {
    alert(accesstoken)
     const response =  axios.post("http://localhost:8080/admin/addSub",subjectDetails,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Add Subject api response:- ', response)
     return response.data;
  } catch (err) {
      console.log(err);
  }
});
export const addQuestion = createAsyncThunk("users/addQuestion",async (questionDetails) => {
  try {
    const response =  axios.post("http://localhost:8080/admin/addQuestion/" + questionDetails.subject_id , questionDetails ,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Question Added:- ', response)
     return response.data;
  } catch (err) {
      console.log(err);
  }
});

export const getSubject = createAsyncThunk("users/getSubject", async (id) => {
  try {
     let response =  await axios.get("http://localhost:8080/admin/getSubj/" + id ,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Got Subject By Id:- ', response)
     let obj = {
      status: 200, ...response.data
      }
      return obj;//return response.data;
  } catch (err) {
      console.log(err); let obj = {
        status : 500 , ...err.response.data
      }
      return obj;
  }
});
export const getQuestion = createAsyncThunk("users/getQuestion", async (id) => {
  try {
     let response =  await axios.get("http://localhost:8080/admin/getQuestion/" + id ,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Got Question By Id :- ', response)
     return response.data;
  } catch (err) {
      console.log(err);
  }
});

export const deleteQuestion = createAsyncThunk("users/deleteQuestion", async (id) => {
  try {
     let response =  await axios.delete("http://localhost:8080/admin/deleteQuestion/" + id ,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Got Question By Id :- ', response)
     let obj = {
      status: 200, ...response.data
      }
      return obj;
  } catch (err) {
      console.log(err);
      let obj = {
        status : 500 , ...err.response.data
      }
      return obj;
  }
});
export const createTest = createAsyncThunk("users/createTest",async (details) => {
    var userId = details.userId;
    var subjectId = details.subject_id
    var lev = details.level;
    alert(userId + subjectId + lev)
  try {
    const response =  axios.post("http://localhost:8080/test/start-test/" + userId + "/" +subjectId+"/"+ lev ,details ,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Test Created:- ', response)
     let obj = {
      status: 200, ...response.data
      }
      return obj;
  } catch (err) {
      console.log(err);
      let obj = {
        status : 500 , ...err.response.data
      }
      return obj;
    }
});

export const getQuestions = createAsyncThunk("users/getTest", async (details) => {
  try {
     let response =  await axios.get("http://localhost:8080/test/getQuestions/" + details.testId +"/"+details.level ,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Test Details :- ', response)
     return response.data;
  } catch (err) {
      console.log(err);
  }
});

export const createResponse = createAsyncThunk("users/createResponse",async (details) => {
try {
  console.log(details.qid + details.optionChosen + details.testId)
  let body = {
    optionChosen:details.optionChosen,
    questionId:details.qid,
    testId:details.testId,
    uid:userid
  }
  const response =  axios.post("http://localhost:8080/test/create-response",body ,{
    headers: {
        'Authorization': 'Bearer ' + accesstoken
    }
});
   console.log('Response Send:- ', response)
   let obj = {
    status: 200, ...response.data
    }
    return obj;
} catch (err) {
    console.log(err);
    let obj = {
      status : 500 , ...err.response.data
    }
    return obj;
  }
});
export const createReport = createAsyncThunk("users/createReport", async (body) => {
  try {
     const response =  await axios.post("http://localhost:8080/test/create-report" ,body ,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Report Generated  :- ', response.data)
    let obj = {
      status : 200, ...response.data
    }
     return obj
  } catch (err) {
      console.log(err);
      let obj ={
        status:500, ...err.response.data
      }
      return obj
    }

});

export const getReport = createAsyncThunk("users/getReport", async (reportId) => {
  try {
     const response =  await axios.get("http://localhost:8080/test/report-details/" + reportId ,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Report by id  :- ', response.data)
    let obj = {
      status : 200, ...response.data
    }
     return obj
  } catch (err) {
      console.log(err);
      let obj ={
        status:500, ...err.response.data
      }
      return obj
    }

});

export const getAllReport = createAsyncThunk("users/getAllReport", async () => {
    alert(userid)
  try {
     let response =  await axios.get("http://localhost:8080/test/getAllReportsForUser/" + userid ,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Test Details :- ', response)
     return response.data;
  } catch (err) {
      console.log(err);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    loading: false,
    errorMessage: '',
    isError :false,
    successMessage: '',
    entity: {},
    isAdminLoggedIn: false,
    isUserLoggedIn :false,
    userid:'',
  },
  reducers: {
    userUpdated(state, action) {
      const { id, name, email } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    userDeleted(state, action) {
      const { id } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        state.entities = state.entities.filter((user) => user.id !== id);
      }
    },
  },
  extraReducers: {
    [signInUser.pending]: (state, action) => {
      state.loading = true;
  },
  [signInUser.fulfilled]: (state, action) => {
    if(action.payload.authorities){
      var role = action.payload.authorities[0].authority;
    }
    else{

    }
    console.log(role)
    if((action.payload.status == 200) && role == 'ROLE_ADMIN') {
         // console.log(action.payload.authorities[0].authority)
          state.isAdminLoggedIn = true;
          console.log(action.payload)
          state.loading = false;
      }
     else if((action.payload.status == 200)&& role == 'ROLE_USER'){
      state.isUserLoggedIn = true;
      state.loading = false;
     }
     else {
          state.loading = false;
          state.isError = true;
          state.errorMessage = action.payload.message
      }

  },
  [signInUser.rejected]: (state, action) => {
      state.loading = false;
  },
[createReport.pending]: (state, action) => {
    state.loading = true;
},
[createReport.fulfilled]: (state, action) => {
  //state.loading = false;
  if((action.payload.status == 200)) {
    state.loading = false;
    state.entities = action.payload
    state.successMessage = 'Report Created Successfully'
  }
   else if(action.payload.status == 500){
        state.loading = false;
        state.entities = action.payload
        state.isError = true;
        alert(action.payload.message)
        state.errorMessage = action.payload.message
        state.successMessage='Failed To Create Report'
   }
},
[createReport.rejected]: (state, action) => {
    state.loading = false;
    state.isError = true;
    state.errorMessage = action.payload.message
},

[getReport.pending]: (state, action) => {
  state.entity = action.payload
  state.loading = true;
},
[getReport.fulfilled]: (state, action) => {
//state.loading = false;
state.loading = true
if((action.payload.status == 200)) {
  state.loading = false;
  state.entity = action.payload
  state.successMessage = 'Report'
}
 else if(action.payload.status == 500){
      state.loading = false;
      state.entity = action.payload
      state.isError = true;
      alert(action.payload.message)
      state.errorMessage = action.payload.message
      state.successMessage='No Report'
 }
 else{
   state.errorMessage = action.payload.message
 }
},
[getReport.rejected]: (state, action) => {
  state.isError = true;
  state.errorMessage = action.payload.message
  state.loading = true;
},


  [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
    },
    [getSubject.pending]: (state, action) => {
      state.loading = true;
  },
  [getSubject.fulfilled]: (state, action) => {
      state.loading = false;
      state.entity = action.payload;
      if(action.payload.status == 200){
        state.loading = false;
      }else{
        state.loading = false;
        state.isError = true;
        state.errorMessage = action.payload.message
      }
    },
  [getSubject.rejected]: (state, action) => {
      state.loading = false;
  },
[getQuestion.pending]: (state, action) => {
    state.loading = true;
},
[getQuestion.fulfilled]: (state, action) => {
    state.loading = false;
    //console.log(action.payload)
    state.entities = action.payload;
  },
[getQuestion.rejected]: (state, action) => {
    state.loading = false;
},
[getQuestions.pending]: (state, action) => {
  state.loading = true;
},
[getQuestions.fulfilled]: (state, action) => {
  state.loading = false;
  //console.log(action.payload)
  state.entities = action.payload;
},
[getQuestions.rejected]: (state, action) => {
  state.loading = false;
},
[getAllReport.pending]: (state, action) => {
  state.loading = true;
},
[getAllReport.fulfilled]: (state, action) => {
  state.loading = false;
  //console.log(action.payload)
  state.entities = action.payload;
},
[getAllReport.rejected]: (state, action) => {
  state.loading = false;
},
[deleteQuestion.pending]: (state, action) => {
  state.loading = true;
},
[deleteQuestion.fulfilled]: (state, action) => {
  state.loading = false;
  state.entities = action.payload;
  if(action.payload.status == 200){
    state.successMessage = 'Deleted Successfully'
  }
  else{
    state.errorMessage = action.payload.message
  }
},
[deleteQuestion.rejected]: (state, action) => {
  state.loading = false;
},
[createTest.pending]: (state, action) => {
  state.loading = true;
},
[createTest.fulfilled]: (state, action) => {
  state.loading = false;
  state.entities = action.payload;
  if(action.payload.status == 200){
    state.successMessage = 'Test Created Successfully ';
  }
  else{
    state.errorMessage = action.payload.message
  }
},
[createTest.rejected]: (state, action) => {
  state.loading = false;
},
  },

});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;

export default usersSlice.reducer;
