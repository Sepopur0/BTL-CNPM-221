import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import userdata from '../data/user.json'

export default function Login() {
	useEffect(() => {
		document.getElementById("loading-layout")?.classList.add("hide--layout")
	}, [])

	const [errorMsg, setErrorMsg] = useState([]);
	const navigate = useNavigate();

	return (
		<div className="container d-flex justify-content-center">
			<form
				className="col-8 form-group p-3 border border-1 border-grey rounded-1"
				onSubmit={(e) => {
					e.preventDefault()
					const data = {
						username: e.target.username.value,
						password: e.target.password.value,
					}

					if (!data.username)
						setErrorMsg((msg) =>
							msg.concat("Tên người dùng không được để trống")
						)
					if (!data.password)
						setErrorMsg((msg) =>
							msg.concat("Mật khẩu không được để trống")
						)

					if (data.username && data.password) {
                        userdata.map((mcp)=>{
                            if(mcp.username===data.username&&mcp.password===data.password){
								if(mcp.type==="C"){
									localStorage.setItem('user',mcp.emp_id);
									navigate('/c',{state:{id:mcp.emp_id,type:'C'}});
								}
								else if(mcp.type==='J'){
									localStorage.setItem('user',mcp.emp_id);
									navigate('/j',{state:{id:mcp.emp_id,type:'J'}});
								}
								else if(mcp.type==='B'){
									localStorage.setItem('user',mcp.emp_id);
									navigate('/b',{state:{id:mcp.emp_id,type:'B'}});
								}
                            }
                        })
						setErrorMsg((msg) =>
							msg.concat("Tên đăng nhập hoặc mật khẩu không đúng")
						)
					}
				}}
			>
				<h2 className="row text-success text-center">Urban waste collection aid - UWC 2.0</h2>
				<div className="row p-2">Đăng nhập vào tài khoản</div>
				<input
					type="text"
					name="username"
					placeholder="Nhập tên"
					className="form-control mb-3 row"
				/>
				<input
					type="password"
					name="password"
					placeholder="Nhập mật khẩu"
					className="form-control mb-3 row"
				/>

				<ul className="list-unstyled text-danger">
					{errorMsg &&
						errorMsg.map((err, id) => <li key={id}>{err}</li>)}
				</ul>

				<button className="btn btn-primary row me-5">Đăng nhập</button>
				<h5 className="btn">Quên mật khẩu/tài khoản?</h5>
			</form>
		</div>
	)
}
