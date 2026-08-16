import { useState } from "react";

function AdminLogin() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

        return (
            <div className="admin-login">
                  <h2>Admin Login</h2>

                        <form>
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
