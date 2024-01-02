const Account = () => {
  return (
    <div>
      <form>
        <input
          name="email"
          type="text"
          placeholder="email을 입력하세요"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input type="submit" value="Log-In" />
      </form>
    </div>
  );
};
