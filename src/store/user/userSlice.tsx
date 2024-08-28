import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	uid: 1,
	displayName: "MeowCopter",
	email: "meowcopter@gmail.com",
	photoUrl:
		"https://i.pinimg.com/736x/75/43/90/75439097625c4b7d5aa933e7245aa175.jpg",
	banner: "https://i.pinimg.com/736x/b8/20/64/b8206411a79d0f8fbcc69dc07c67498e.jpg",
	introduce:
		'Pimtha (sinh năm 1996) được biết đến là hot girl có sức ảnh hưởng lớn không chỉ ở xứ sở chùa Vàng mà cả châu Á bởi ngoại hình xinh đẹp và phong cách ăn mặc dẫn đầu xu hướng. Cô được giới trẻ Thái Lan mệnh danh là "búp bê Barbie Đông Nam Á".',
	join: "2024/08/20",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			return { ...state, ...action.payload };
		},
	},
});

export default userSlice.reducer;
