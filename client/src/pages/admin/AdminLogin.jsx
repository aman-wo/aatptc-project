import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function AdminLogin() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();

      try {
          const response = await api.post("/auth/login", {
                email,
                      password,
                          });
                          localStorage.setItem("token", response.data.token);
                        //localStorage.removeItem("token");
                          navigate("/admin/dashboard");

                              console.log("Login response:", response.data);
                                } catch (error) {
                                    console.error("Login failed:", error);
                                      }
                                      };


        return (
            <div className="admin-login">
                  <h2>Admin Login</h2>

                        <form onSubmit={handleSubmit}>
                                <div>
                                          <label htmlFor="email">Email</label>
                                                    <input
                                                                type="email"
                                                                            id="email"
                                                                                        name="email"
                                                                                                    placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}
                                                                                                              />
                                                                                                                      </div>

                                                                                                                              <div>
                                                                                                                                        <label htmlFor="password">Password</label>
                                                                                                                                                  <input
                                                                                                                                                    type="password"
                                                                                                                                                      id="password"
                                                                                                                                                        name="password"
                                                                                                                                                          placeholder="Enter your password"
                                                                                                                                                            value={password}
                                                                                                                                                              onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                              />
                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                            <button type="submit">Login</button>
                                                                                                                                                                                                                                  </form>
                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                        export default AdminLogin;
