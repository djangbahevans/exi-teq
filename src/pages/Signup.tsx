const SignupPage = () => {
	return (
		<div>
			<div className="links">
				<a href="login" className="link">
					Log In
				</a>
				<a href="signup" className="link">
					Sign up
				</a>
			</div>
			<form>
				<input type="text" placeholder="Email address" />
				<input type="text" placeholder="Password" />
				<input type="text" placeholder="Confirm password" />
				<input type="button" value="Sign in" />
			</form>
			<a href="forgot-password" className="forgot-password">
				forgot password
			</a>
		</div>
	);
};

export default SignupPage;
