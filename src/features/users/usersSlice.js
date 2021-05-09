import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
var accesstoken  = ''
var userid=''
export const signInUser = createAsyncThunk("users/signInUser", async (userDetails) => {
   try {
      const response = await axios.post("http://localhost:8080/api/auth/signin", userDetails);
      console.log('Sign In api response:- ', response)
      const user = await axios.get("http://localhost:8080/find/getByUsername/"+response.data.username)
      userid = user.data.id
      accesstoken = response.data.accessToken;
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
    // return response.data;
     let obj = {
      status: 200, ...response.data
      }
      return obj;
      //return response.data;
  } catch (err) {
      console.log(err); 
      let obj = {
        status : 500 , ...err.response.data
      }
      return obj;
  }
});

export const addSubject = createAsyncThunk("users/addSubject", async (subjectDetails) => {
  try {
     const response =  axios.post("http://localhost:8080/admin/addSub",subjectDetails,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  });
     console.log('Add Subject api response:- ', response)
     let obj = {
      status: 200, ...response.data
      }
      return obj;
      //return response.data;
  } catch (err) {
      console.log(err); 
      let obj = {
        status : 500 , ...err.response.data
      }
      return obj;
  }
});
export const addQuestion = createAsyncThunk("users/addQuestion",async (questionDetails) => {
  try {
    const response =  axios.post("http://localhost:8080/admin/addQuestion/" + questionDetails.subject_id , questionDetails ,{
      headers: {
          'Authorization': 'Bearer ' + accesstoken
      }
  }); let obj = {
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
     //console.log('Got Question By Id :- ', response)
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
  try {
    const response = await axios.post("http://localhost:8080/test/start-test/" + userId + "/" +subjectId+"/"+ lev ,details ,{
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
    isSuccess: false
  },
  reducers: {
    
  },
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
  },
  
    [signUpUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.entity = action.payload
      if(action.payload.status == 200){
        state.isError=false;
        state.errorMessage='';
        state.isSuccess = true
      }
      else{
          state.isError=true;
          state.errorMessage=action.payload.message;
          state.isSuccess = false;
        }
      },
  [signUpUser.rejected]: (state, action) => {
    state.loading = false;
    state.isError = true;
    state.errorMessage=action.payload.message;
    state.isSuccess = false;
  },

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
  
  [addSubject.pending]: (state, action) => {
    state.loading = true;
    state.isSuccess=false;
    state.successMessage=''
},

  [addSubject.fulfilled]: (state, action) => {
    state.loading = false;
    state.entity = action.payload
    if(action.payload.status == 200){
      state.isError=false;
      state.errorMessage='';
      state.isSuccess = true
      state.successMessage='Subject Added Successfully'
    }
    else if(state.action.payload !=200 ){
        state.isError=true;
        state.errorMessage=action.payload.message;
        state.isSuccess = false;
        state.successMessage='Problem in adding subject'
      }
    },
[addSubject.rejected]: (state, action) => {
  state.loading = false;
  state.isError = true;
  state.successMessage='';
  state.errorMessage=action.payload.message;
  state.isSuccess = false;
},

 
[addQuestion.pending]: (state, action) => {
  state.loading = true;
  state.isSuccess=false;
  state.successMessage=''
},

[addQuestion.fulfilled]: (state, action) => {
  state.loading = false;
  state.entity = action.payload
  if(action.payload.status == 200){
    state.isError=false;
    state.errorMessage='';
    state.isSuccess = true
    state.successMessage='Question Added Successfully'
  }
  else if(state.action.payload !=200 ){
      state.isError=true;
      state.errorMessage=action.payload.message;
      state.isSuccess = false;
      state.successMessage='Problem in adding subject'
    }
  },
[addQuestion.rejected]: (state, action) => {
state.loading = false;
state.isError = true;
state.successMessage='';
state.errorMessage=action.payload.message;
state.isSuccess = false;
},


[createReport.pending]: (state, action) => {
    state.loading = true;
},
[createReport.fulfilled]: (state, action) => {
  state.loading = false;
  state.entity = action.payload
  if(action.payload.status == 200){
    state.isSuccess = true;
    state.successMessage = 'Report Created Successfully ';
  }
  else if(action.payload.status == 500){
    console.log('failed with 500')
    state.isError=true;
    state.isSuccess=false;
    state.errorMessage='Invalid Details'
  }
  else{
    console.log('failed with other')
    state.isError=true;
    state.isSuccess=false;
    state.errorMessage=action.payload.message
    
  }
},
[createReport.rejected]: (state, action) => {
  console.log('in rejected')
    state.loading = false;
},

[getReport.pending]: (state, action) => {
  state.loading = true;
},
[getReport.fulfilled]: (state, action) => {
//state.loading = false;
state.loading = true;
state.entity = action.payload;
if(action.payload.status == 200){
  state.loading = false;
  state.isSuccess=true
  state.isError=false
}
else if(action.payload.status == 500){
  state.loading = true;
  state.isError = true;
  state.errorMessage = 'No Report For Id'
  state.isSuccess=false
}
else{
  state.loading = true;
  state.isError = true;
  state.errorMessage = action.payload.message
  state.isSuccess=false
}
},
[getReport.rejected]: (state, action) => {
  state.loading = true;
  state.isError=true
  state.isSuccess=false
  state.errorMessage=''
  state.successMessage=''
},

    [getSubject.pending]: (state, action) => {
      state.loading = true;
  },
  [getSubject.fulfilled]: (state, action) => {
      state.loading = true;
      state.entity = action.payload;
      if(action.payload.status == 200){
        state.loading = false;
        state.isSuccess=true
        state.isError=false
      }else{
        state.loading = true;
        state.isError = true;
        state.errorMessage = action.payload.message
        state.isSuccess=false
      }
    },
  [getSubject.rejected]: (state, action) => {
      state.loading = true;
      state.isError=true
      state.isSuccess=false
      state.errorMessage=''
      state.successMessage=''
  },
  
[getQuestion.pending]: (state, action) => {
    state.loading = true;
},
[getQuestion.fulfilled]: (state, action) => {
      state.loading=false
      console.log(action.payload)
      state.entities = action.payload;
  },
[getQuestion.rejected]: (state, action) => {
    state.loading = false;
    state.isError=true;
  },
[getQuestions.pending]: (state, action) => {
  state.loading = true;
  state.isSuccess=false;

},
[getQuestions.fulfilled]: (state, action) => {
  state.loading = false;
  //console.log(action.payload)
  state.entities = action.payload;
  state.isSuccess=true;
},
[getQuestions.rejected]: (state, action) => {
  state.loading = false;
  state.isSuccess = false;
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
  state.entity = action.payload;
  if(action.payload.status == 200){
    state.isSuccess = true;
    state.successMessage = 'Test Created Successfully ';
  }
  else {
    state.isError=true;
    state.isSuccess=false;
    state.errorMessage=action.payload.message
  }
},
[createTest.rejected]: (state, action) => {
  state.loading = false;
},
  },

});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;

export default usersSlice.reducer;
