/**
 * ====================================================================
 * SĨ TỬ 12 - TRI THỨC VÀNG & ĐẤU TRƯỜNG THPT QUỐC GIA
 * Dữ liệu 5 Tác Phẩm Trọng Tâm:
 * 1. Xuân Tóc Đỏ cứu quốc (Vũ Trọng Phụng)
 * 2. Mùa lá rụng trong vườn (Ma Văn Kháng)
 * 3. Cảm hoài (Đặng Dung)
 * 4. Tây Tiến (Quang Dũng)
 * 5. Đàn ghi ta của Lor-ca (Thanh Thảo)
 * ====================================================================
 */

// 1. TÁC PHẨM VĂN HỌC LỚP 12 TRỌNG TÂM (CHỈ 5 TÁC PHẨM YÊU CẦU)
const LITERATURE_WORKS = [
  // --- TÁC PHẨM 1: XUÂN TÓC ĐỎ CỨU QUỐC ---
  {
    id: 'xuan-toc-do-cuu-quoc',
    title: 'Xuân Tóc Đỏ cứu quốc',
    author: 'Vũ Trọng Phụng',
    genre: 'Tiểu thuyết trào phúng hiện thực / Đỉnh cao trào phúng văn học Việt Nam',
    year: '1936',
    location: 'Trích chương XX - Tiểu thuyết "Số đỏ"',
    background: 'Đoạn trích thuộc chương XX của kiệt tác tiểu thuyết trào phúng "Số đỏ" (1936). Bối cảnh diễn ra tại sân quần vợt Hà Nội nhân chuyến viếng thăm chính thức của vua Xiêm La (Thái Lan) nhằm thắt chặt mối quan hệ bang giao giữa hai nước.',
    summary: 'Trước nguy cơ trận đấu quần vợt làm phật lòng vua Xiêm và đe dọa hòa bình ngoại giao, Xuân Tóc Đỏ được các quan chức chính phủ chỉ thị phải cố tình thua. Bằng sự láu cá, trơ trẽn và tài mị dân bỉ ổi, Xuân đã biến trận thua nhục nhã thành hành động "hy sinh danh dự cá nhân vì nền hòa bình xứ sở", được đám đông cuồng loạn tôn xưng là bậc vĩ nhân, anh hùng cứu quốc.',
    themes: [
      {
        title: 'Trận chung kết quần vợt bi hài và bộ mặt ngoại giao lố lăng',
        analysis: 'Hai quán quân quần vợt Bắc Kỳ bị Xuân Tóc Đỏ bày mưu hãm hại để Xuân được ra sân thay thế. Khi Xuân áp đảo tay vợt Xiêm khiến vua Xiêm nổi giận, chính phủ và giới thượng lưu hoảng loạn, xuống nước van nài Xuân phải chịu thua để giữ gìn hòa bình ngoại giao.',
        quotes: [
          'Nếu để thua thì mất mặt nước nhà, nhưng nếu thắng thì nước Xiêm đem quân sang đánh...',
          'Các quan chức chính phủ, ông đốc, ông tham xúm lại nài nỉ Xuân nhường cho tay vợt nước bạn...'
        ]
      },
      {
        title: 'Màn diễn thuyết trơ trẽn tột cùng và nghệ thuật mị dân của Xuân',
        analysis: 'Trước cơn thịnh nộ của hàng ngàn khán giả vì cú đánh hỏng cố ý, Xuân vỗ ngực hùng biện: "Hỡi công chúng! Người ta đã mua chuộc tôi! Nhưng tôi đã vì danh dự của tổ quốc, vì nền hòa bình... mà tôi nhường cho người Xiêm!". Biến thất bại thành vinh quang cứu quốc.',
        quotes: [
          'Hỡi công chúng! Người ta đã mua chuộc tôi! Nhưng tôi vì danh dự của tổ quốc, vì nền hòa bình của hai nước...',
          'Xuân Tóc Đỏ vạn tuế! Sự hy sinh vì hòa bình muôn năm!'
        ]
      },
      {
        title: 'Tiếng cười trào phúng cay độc vạch trần xã hội đảo điên thật - giả',
        analysis: 'Một kẻ ma cà bông, vô học, nhờ thói xu nịnh và bịp bợm đã leo lên tột đỉnh danh vọng, được vua Xiêm tặng Huân chương Bắc Đẩu Bội Tinh. Vũ Trọng Phụng phơi bày bản chất nhố nhăng, giả dối của phong trào Âu hóa và xã hội thực dân nửa phong kiến.',
        quotes: [
          'Một xã hội chó đểu, một xã hội vô nghĩa lý!',
          'Cả sân vận động vỡ òa, những chiếc mũ dạ tung lên trời, người ta công kênh kẻ bịp bợm như một vị anh hùng dân tộc.'
        ]
      }
    ],
    quotesForEssays: [
      { text: 'Số đỏ là một kiệt tác trào phúng vô tiền khoáng hậu, một đỉnh cao không thể vượt qua của văn học hiện thực phê phán Việt Nam.', author: 'GS. Nguyễn Đăng Mạnh' },
      { text: 'Ngòi bút Vũ Trọng Phụng như lưỡi dao mổ xẻ tận gốc rễ những khối u đạo đức giả của tầng lớp thượng lưu thời Âu hóa.', author: 'Nhà phê bình Vũ Ngọc Phan' }
    ],
    examTips: 'Khi phân tích đoạn trích này, phải tập trung vào: Nghệ thuật tạo tình huống trào phúng nghịch dị; Mâu thuẫn kịch tính giữa một trận thua thể thao và danh xưng "cứu quốc"; Nghệ thuật khắc họa ngôn ngữ hùng biện giả dối, mị dân của Xuân Tóc Đỏ.'
  },

  // --- TÁC PHẨM 2: MÙA LÁ RỤNG TRONG VƯỜN ---
  {
    id: 'mua-la-rung-trong-vuon',
    title: 'Mùa lá rụng trong vườn',
    author: 'Ma Văn Kháng',
    genre: 'Tiểu thuyết tâm lý - thế sự gia đình thời kỳ đổi mới',
    year: '1985',
    location: 'Hà Nội (Chiều 30 Tết)',
    background: 'Sáng tác năm 1985, thời điểm đất nước đang chuẩn bị bước vào công cuộc Đổi mới (1986). Cơ chế kinh tế thị trường manh nha xuất hiện mang lại nhiều cơ hội nhưng cũng làm đảo lộn, rạn nứt nhiều giá trị đạo đức truyền thống trong nếp nhà người Việt.',
    summary: 'Đoạn trích tái hiện buổi chiều 30 Tết sum họp thiêng liêng tại gia đình ông Bằng - một gia đình trí thức Hà Nội nền nếp. Sự trở về bất ngờ của chị Hoài (dù đã tái giá) mang theo tình nghĩa thủy chung son sắt, cùng nỗi niềm nghẹn ngào của ông Bằng trước bàn thờ tổ tiên đã khẳng định sức sống bền vững của văn hóa gia đình trước thử thách của thời cuộc.',
    themes: [
      {
        title: 'Hình tượng nhân vật chị Hoài - Hiện thân của đạo lý nghĩa tình son sắt',
        analysis: 'Chị Hoài là dâu trưởng, sau khi anh Cừ hy sinh, chị đã lập gia đình mới ở quê. Nhưng chiều 30 Tết, chị vẫn vượt đường sá xa xôi về thăm gia đình chồng cũ với tất cả sự chân thành, ấm áp, mang theo quà quê mộc mạc và gắn kết mọi thành viên.',
        quotes: [
          'Chị Hoài đã về! Chị về mang theo cả hương vị mộc mạc của quê hương, của tình nghĩa gia đình không gì đánh đổi được.',
          'Người con dâu ấy tuy đã có gia đình riêng nhưng trong lòng vẫn nguyên vẹn một chữ tình trọn vẹn với nhà chồng cũ.'
        ]
      },
      {
        title: 'Hình tượng ông Bằng - Nỗi lòng người cha già gìn giữ gia phong',
        analysis: 'Người trí thức già nho nhã, mẫu mực, xúc động nghẹn ngào khi thấy chị Hoài trở về. Đứng trước bàn thờ tổ tiên khói hương nghi ngút, ông rưng rưng cầu nguyện cho sự bền vững của nếp nhà trước cơn lốc thực dụng của cuộc sống mới.',
        quotes: [
          'Ông Bằng đứng lặng trước bàn thờ tổ tiên, đôi mắt ngấn lệ... Cội nguồn gia đình chính là nơi nương tựa vững chắc nhất của đời người.',
          'Nỗi nghẹn ngào trước những xáo trộn của thời cuộc và niềm hy vọng vào thế hệ cháu con.'
        ]
      },
      {
        title: 'Xung đột thế sự và bức thông điệp sâu sắc về cội nguồn văn hóa',
        analysis: 'Sự va đập giữa lối sống thực dụng, chạy theo đồng tiền của cơ chế thị trường (thể hiện qua nhân vật Lý, Cừ) với những giá trị đạo đức tinh thần truyền thống tốt đẹp. Tác phẩm gióng lên hồi chuông cảnh tỉnh về việc giữ gìn bản sắc và tình người.',
        quotes: [
          'Gia đình là pháo đài cuối cùng che chở con người trước những giông bão của cuộc đời.',
          'Bữa cơm tất niên chiều 30 Tết chính là sợi dây tâm linh thiêng liêng níu giữ hồn cốt dân tộc.'
        ]
      }
    ],
    quotesForEssays: [
      { text: 'Ma Văn Kháng là cây bút nhạy bén và sâu sắc bậc nhất khi khai thác những biến động âm thầm trong tâm lý gia đình thời mở cửa.', author: 'GS. Phong Lê' },
      { text: 'Mùa lá rụng trong vườn là một khúc ca trầm lắng về đạo lý truyền thống và sự trường tồn của mái ấm gia đình người Việt.', author: 'Lý luận Văn học' }
    ],
    examTips: 'Cần phân tích không gian thời gian đặc biệt: "Chiều 30 Tết bên bàn thờ gia tiên". Đây là thời khắc thiêng liêng nhất của văn hóa Việt, nơi người sống đối thoại với tiền nhân, làm nổi bật nhân cách cao đẹp của chị Hoài và ông Bằng.'
  },

  // --- TÁC PHẨM 3: CẢM HOÀI ---
  {
    id: 'cam-hoai',
    title: 'Cảm hoài (Nỗi lòng)',
    author: 'Đặng Dung',
    genre: 'Thơ chữ Hán trung đại / Thể thất ngôn bát cú Đường luật bi tráng',
    year: 'Đầu thế kỷ XV',
    location: 'Thời Hậu Trần (Kháng chiến chống quân Minh)',
    background: 'Đặng Dung là danh tướng thời Hậu Trần, cùng cha là Đặng Tất và vua Trùng Quang kiên cường kháng chiến chống quân xâm lược nhà Minh. Khi cuộc kháng chiến thất bại, ông rơi vào tay giặc và khẳng khái tuẫn tiết. Bài thơ là tuyệt bút trăn trở trước vận nước và chí khí anh hùng bất diệt.',
    summary: 'Bài thơ bộc lộ nỗi niềm cảm khái sâu sắc của một vị tướng trượng phu: xót xa trước thời thế tao loạn, khát vọng phò vua giúp nước mãnh liệt nhưng bất lực trước vận nước suy vong; đọng lại ở hình tượng tráng sĩ mài kiếm dưới ánh trăng tà bi hùng tuyệt mỹ.',
    themes: [
      {
        title: 'Nỗi niềm bi tráng trước sự trớ trêu của thời thế và số phận',
        analysis: 'Hai câu luận đúc kết quy luật lịch sử ngậm ngùi: "Thời lai đồ điếu thành công dị / Vận khứ anh hùng ẩm hận đa" (Gặp thời kẻ đồ tể câu cá cũng dễ lập công / Hết vận bậc anh hùng cũng đành ngậm hận). Đó là bi kịch của người anh hùng sinh không gặp thời.',
        quotes: [
          'Thời lai đồ điếu thành công dị / Vận khứ anh hùng ẩm hận đa',
          'Thế sự mang mang nhất túy hưu / Cố hương nhàn khước nhất trường sầu'
        ]
      },
      {
        title: 'Khát vọng xoay trời chuyển đất và chí khí cứu nước ngút ngàn',
        analysis: 'Hai câu thực thể hiện hoài bão vĩ đại phi thường: "Trí chúa hữu hoài phù địa trục / Tẩy binh vô lộ vãn thiên hà" (Giúp chúa ôm lòng nâng trục đất / Rửa giáo không đường kéo sông Ngân). Dù biết sức cùng lực kiệt vẫn ôm trọn tấm lòng trung nghĩa vì non sông.',
        quotes: [
          'Trí chúa hữu hoài phù địa trục / Tẩy binh vô lộ vãn thiên hà'
        ]
      },
      {
        title: 'Hình tượng bi tráng tuyệt mỹ: Tráng sĩ mài gươm dưới bóng trăng tà',
        analysis: 'Hai câu kết là bức tượng đài tráng lệ: "Quốc thù vị báo đầu tiên bạch / Kỷ độ Long Tuyền đới nguyệt ma" (Thù nước chưa xong đầu đã bạc / Mấy phen mài kiếm bóng trăng tà). Tóc đã bạc vì lo nỗi nước, nhưng đêm đêm vẫn mài kiếm dưới trăng, sẵn sàng chiến đấu đến hơi thở cuối cùng.',
        quotes: [
          'Quốc thù vị báo đầu tiên bạch / Kỷ độ Long Tuyền đới nguyệt ma'
        ]
      }
    ],
    quotesForEssays: [
      { text: 'Bài thơ Cảm hoài của Đặng Dung là khúc tráng ca bi hùng bậc nhất của thi ca yêu nước thời trung đại Việt Nam.', author: 'Nhà nghiên cứu Đặng Thai Mai' },
      { text: 'Hình tượng người anh hùng mài gươm dưới trăng là một bức tượng đài nghệ thuật sừng sững về lòng trung trinh ái quốc.', author: 'GS. Lê Trí Viễn' }
    ],
    examTips: 'Phân tích sự tương phản giữa khát vọng kỳ vĩ (phù địa trục, vãn thiên hà) với hiện thực cay đắng (vô lộ, ẩm hận đa, đầu tiên bạch). Bài thơ buồn đau nhưng hào sảng, không hề bi lụy, ngời sáng vẻ đẹp trượng phu.'
  },

  // --- TÁC PHẨM 4: TÂY TIẾN ---
  {
    id: 'tay-tien',
    title: 'Tây Tiến',
    author: 'Quang Dũng',
    genre: 'Thơ ca cách mạng / Khuynh hướng lãng mạn & cảm hứng bi tráng',
    year: '1948',
    location: 'Phù Lưu Chanh',
    background: 'Đoàn quân Tây Tiến thành lập đầu năm 1947, gồm phần đông là thanh niên, học sinh, trí thức Hà Nội chiến đấu bảo vệ biên giới Tây Bắc và giúp bạn Lào. Cuối năm 1948, Quang Dũng chuyển đơn vị khác, tại Phù Lưu Chanh nhớ về đồng đội cũ và sáng tác bài thơ.',
    summary: 'Bài thơ tái hiện nỗi nhớ da diết của tác giả về thiên nhiên miền Tây vừa hùng vĩ, hiểm trở vừa thơ mộng trữ tình; cùng với đó là bức tượng đài bất tử về người lính Tây Tiến hào hoa, thanh lịch, mang tinh thần bi tráng và lý tưởng xả thân vì Tổ quốc.',
    themes: [
      {
        title: 'Bức tranh thiên nhiên Tây Bắc hiểm trở mà thơ mộng',
        analysis: 'Địa danh Sài Khao sương lấp, Mường Lát hoa về. Độ dốc đứng, heo hút "Dốc lên khúc khuỷu dốc thăm thẳm / Heo hút cồn mây súng ngửi trời". Nghệ thuật thanh điệu tài tình với câu thơ 7 thanh bằng "Nhà ai Pha Luông mưa xa khơi" gợi sự êm dịu bao la.',
        quotes: [
          'Sài Khao sương lấp đoàn quân mỏi / Mường Lát hoa về trong đêm hơi',
          'Dốc lên khúc khuỷu dốc thăm thẳm / Heo hút cồn mây súng ngửi trời',
          'Nhà ai Pha Luông mưa xa khơi'
        ]
      },
      {
        title: 'Kỷ niệm ấm áp tình quân dân & đêm hội đuốc hoa',
        analysis: 'Hương vị nếp xôi Tây Bắc: "Mai Châu mùa em thơm nếp xôi". Đêm liên hoan đậm chất mộng mơ: "Doanh trại bừng lên hội đuốc hoa / Kìa em xiêm áo tự bao giờ", tiếng khèn man dại đưa hồn thơ bay bổng.',
        quotes: [
          'Doanh trại bừng lên hội đuốc hoa / Kìa em xiêm áo tự bao giờ / Khèn lên man điệu nàng e ấp',
          'Mai Châu mùa em thơm nếp xôi'
        ]
      },
      {
        title: 'Bức tượng đài người lính Tây Tiến hào hùng, bi tráng',
        analysis: 'Ngoại hình gian khổ nhưng phi thường: "Đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm". Trái tim hào hoa, lãng mạn: "Đêm mơ Hà Nội dáng kiều thơm". Cái chết được thi vị hóa bất tử: "Áo bào thay chiếu anh về đất / Sông Mã gầm lên khúc độc hành".',
        quotes: [
          'Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm',
          'Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm',
          'Rải rác biên cương mồ viễn xứ / Chiến trường đi chẳng tiếc đời xanh',
          'Áo bào thay chiếu anh về đất / Sông Mã gầm lên khúc độc hành'
        ]
      }
    ],
    quotesForEssays: [
      { text: 'Tây Tiến là đóa hoa đầu mùa ngát hương của thơ ca kháng chiến chống Pháp.', author: 'Nhà phê bình Vũ Quần Phương' },
      { text: 'Quang Dũng đứng riêng một ốc đảo, đặc biệt với chất hào hoa, lãng mạn của người lính trí thức thủ đô.', author: 'GS. Nguyễn Đăng Mạnh' }
    ],
    examTips: 'Khi phân tích Tây Tiến, bắt buộc phải làm nổi bật 2 yếu tố sóng đôi: "Cảm hứng lãng mạn" và "Khuynh hướng bi tráng". Tuyệt đối không được hiểu hình ảnh "không mọc tóc, xanh màu lá" là yếu đuối, mà là hiện thực chiến trường khốc liệt tôn vinh khí phách lẫm liệt.'
  },

  // --- TÁC PHẨM 5: ĐÀN GHI TA CỦA LOR-CA ---
  {
    id: 'dan-ghi-ta-cua-lor-ca',
    title: 'Đàn ghi ta của Lor-ca',
    author: 'Thanh Thảo',
    genre: 'Thơ hiện đại / Khuynh hướng tượng trưng, siêu thực',
    year: '1985',
    location: 'Tập thơ "Khối vuông ru-bích"',
    background: 'Sáng tác năm 1985, in trong tập "Khối vuông ru-bích". Bài thơ viết về Phê-đê-ri-cô Ga-xi-a Lor-ca (1898 - 1936) - nhà thơ, nhạc sĩ thiên tài của Tây Ban Nha, người chiến sĩ kiên cường chống chế độ độc tài phát xít Franco, bị chúng sát hại dã man năm 1936.',
    summary: 'Bài thơ khắc họa hình tượng nhà thơ nghệ sĩ Lor-ca tự do, đơn độc trên đấu trường sinh tử, bị sát hại oan khuất bởi chế độ độc tài bạo tàn; đồng thời ngợi ca tiếng đàn ghi ta bất tử - biểu tượng cho sức sống mãnh liệt của nghệ thuật chân chính và khát vọng tự do của con người.',
    themes: [
      {
        title: 'Hình tượng Lor-ca - Người chiến sĩ nghệ sĩ tự do, cô độc giữa xứ sở Tây Ban Nha',
        analysis: 'Lor-ca hiện lên với hình ảnh: "Những tiếng đàn bọt nước / Tây Ban Nha áo choàng đỏ gắt / Li-la li-la li-la / Đi lang thang về miền đơn độc / Với vầng trăng chếnh choáng / Trên lưng ngựa mỏi mòn". Sự đối lập giữa tâm hồn nghệ sĩ khát khao cách tân và bầu không khí ngột ngạt độc tài.',
        quotes: [
          'Những tiếng đàn bọt nước / Tây Ban Nha áo choàng đỏ gắt / Li-la li-la li-la...',
          'Đi lang thang về miền đơn độc / Với vầng trăng chếnh choáng / Trên lưng ngựa mỏi mòn'
        ]
      },
      {
        title: 'Cái chết bi phẫn và tội ác dã man của phát xít',
        analysis: 'Bọn phát xít bắn chết Lor-ca rồi vứt xác xuống giếng: "Tây Ban Nha / Hát nghêu ngao / Bỗng kinh hoàng / Áo choàng bê bết đỏ / Lor-ca bị điệt vào bãi bắn / Chàng đi như người mộng du". Sự bạo tàn có thể hủy diệt thể xác nhưng không thể dập tắt lý tưởng.',
        quotes: [
          'Tây Ban Nha / Hát nghêu ngao / Bỗng kinh hoàng / Áo choàng bê bết đỏ',
          'Lor-ca bị điệt vào bãi bắn / Chàng đi như người mộng du'
        ]
      },
      {
        title: 'Tiếng đàn ghi ta bất tử và sự vĩnh hằng của nghệ thuật',
        analysis: 'Chuỗi âm thanh "li-la li-la li-la" mô phỏng tiếng đàn buông dây, gợi cánh hoa tử đinh hương. Tiếng đàn biến thành sinh thể: "tiếng ghi-ta nâu", "tiếng ghi-ta lá xanh", "tiếng ghi-ta tròn bọt nước", "tiếng ghi-ta ròng ròng máu chảy". Nghệ thuật sống mãi như ngọn cỏ mọc hoang.',
        quotes: [
          'Không ai chôn cất tiếng đàn / Tiếng đàn như cỏ mọc hoang / Giọt nước mắt vầng trăng / Long lanh trong đáy giếng',
          'Đường chỉ tay đã đứt / Dòng sông rộng vô cùng / Lor-ca bơi sang ngang / Trên chiếc ghi-ta màu bạc'
        ]
      }
    ],
    quotesForEssays: [
      { text: 'Thanh Thảo đã tạo nên một khúc cầu hồn bi tráng và tráng lệ cho một linh hồn thi ca bất tử của nhân loại.', author: 'Nhà phê bình Hoàng Hưng' },
      { text: 'Đàn ghi ta của Lor-ca là sự thăng hoa của nhạc điệu, hình ảnh tượng trưng siêu thực và nỗi ám ảnh nghệ thuật.', author: 'GS. Trần Đình Sử' }
    ],
    examTips: 'Nắm chắc nghệ thuật tượng trưng siêu thực: cấu trúc không dấu câu hoa mĩ, nhạc tính mô phỏng tiếng đàn Flamenco (li-la li-la), các ẩn dụ chuyển đổi cảm giác (tiếng đàn nâu, tiếng đàn lá xanh, tiếng đàn ròng ròng máu chảy).'
  }
];

// 2. KHO NHẬN ĐỊNH VĂN HỌC ĐẮT GIÁ THEO CHỦ ĐỀ
const LIT_QUOTES = [
  {
    category: 'Về Thơ ca',
    quote: 'Thơ là tiếng nói tri âm, là sự đồng điệu giữa những tâm hồn, là nơi ngọn gió cảm xúc thổi qua cây đàn tâm linh để cất lên khúc hát cuộc đời.',
    author: 'Tố Hữu',
    application: 'Dùng mở bài hoặc kết bài khi phân tích Tây Tiến, Đàn ghi ta của Lor-ca, Cảm hoài.'
  },
  {
    category: 'Về Trào phúng & Hiện thực',
    quote: 'Tiếng cười trào phúng chân chính là thứ vũ khí sắc bén nhất để trừng phạt cái xấu, cái ác và sự giả dối trong xã hội.',
    author: 'Vũ Trọng Phụng',
    application: 'Rất đắt giá khi phân tích Xuân Tóc Đỏ cứu quốc (Số đỏ).'
  },
  {
    category: 'Về Đạo lý & Gia đình',
    quote: 'Gia đình là pháo đài cuối cùng che chở con người trước những giông bão của cuộc đời. Dù xã hội đổi thay thế nào thì cội nguồn nghĩa tình vẫn là điểm tựa thiêng liêng nhất.',
    author: 'Ma Văn Kháng',
    application: 'Dùng khi phân tích Mùa lá rụng trong vườn.'
  },
  {
    category: 'Về Khí phách Anh hùng',
    quote: 'Hình tượng người anh hùng mài gươm dưới trăng trong thơ Đặng Dung là một bức tượng đài nghệ thuật sừng sững về lòng trung trinh ái quốc muôn đời.',
    author: 'GS. Lê Trí Viễn',
    application: 'Dùng khi phân tích bài thơ Cảm hoài.'
  },
  {
    category: 'Về Nghệ thuật Bất tử',
    quote: 'Cái đẹp và nghệ thuật chân chính không bao giờ chết. Bạo lực có thể hủy diệt thể xác người nghệ sĩ nhưng không thể nào chôn cất được tiếng đàn tự do.',
    author: 'Thanh Thảo',
    application: 'Rất đắt giá khi phân tích Đàn ghi ta của Lor-ca.'
  },
  {
    category: 'Về Phong cách tác giả',
    quote: 'Mỗi công dân có một dạng vân tay, mỗi nghệ sĩ thứ thiệt đều có một dạng vân chữ không thể trộn lẫn.',
    author: 'Lê Đạt',
    application: 'Dùng khi phân tích cái tôi hào hoa của Quang Dũng hay phong cách tượng trưng siêu thực của Thanh Thảo.'
  }
];

// 3. CẨM NANG NGHỊ LUẬN XÃ HỘI (200 CHỮ)
const NLXH_HANDBOOK = {
  formula5Steps: [
    { step: 1, name: 'Mở đoạn (1-2 câu)', content: 'Dẫn dắt trực tiếp và nêu đúng vấn đề nghị luận theo yêu cầu đề bài. (Ví dụ: "Trong hành trình hoàn thiện nhân cách, lòng kiên trì chính là chiếc chìa khóa vạn năng mở ra cánh cửa thành công...").' },
    { step: 2, name: 'Giải thích (2-3 câu)', content: 'Cắt nghĩa ngắn gọn từ khóa chính/khái niệm. Trả lời câu hỏi: Đó là gì? Biểu hiện như thế nào?' },
    { step: 3, name: 'Bàn luận & Chứng minh (5-7 câu)', content: 'Trả lời: Vì sao cần có phẩm chất/hiện tượng này? Nó mang lại giá trị gì cho bản thân và xã hội? Nếu thiếu nó cuộc sống sẽ ra sao?' },
    { step: 4, name: 'Dẫn chứng thực tế (2-3 câu)', content: 'Nêu 1 dẫn chứng điển hình, xác thực, mang tính thời sự, phân tích ngắn gọn gắn với vấn đề.' },
    { step: 5, name: 'Phản đề & Bài học (2-3 câu)', content: 'Phê phán biểu hiện tiêu cực ngược lại. Rút ra bài học nhận thức và hành động thiết thực cho người trẻ hôm nay.' }
  ],
  goldenEvidence: [
    {
      topic: 'Ý chí vượt khó & Bản lĩnh',
      name: 'Nguyễn Thúc Thùy Tiên & Hành trình nỗ lực bền bỉ',
      detail: 'Vượt qua tuổi thơ thiếu thốn tình cảm gia đình, tự trang trải học tập, kiên trì trau dồi tri thức và ngoại ngữ để đăng quang Miss Grand International và tích cực làm thiện nguyện toàn cầu.'
    },
    {
      topic: 'Khát vọng cống hiến & Trí tuệ Việt',
      name: 'Kỹ sư Lê Viết Quốc (Google AI)',
      detail: 'Nhà khoa học người Việt đồng sáng lập Google Brain, tiên phong nghiên cứu trí tuệ nhân tạo thế giới, tấm gương về khát vọng đưa trí tuệ Việt Nam vươn tầm thời đại công nghệ số.'
    },
    {
      topic: 'Lòng nhân ái & Trách nhiệm cộng đồng',
      name: 'Dự án "Nuôi Em" của Hoàng Hoa Trung',
      detail: 'Kết nối hàng chục vạn tấm lòng hảo tâm mang lại hàng triệu bữa cơm no ấm cho trẻ em vùng cao Tây Bắc, minh chứng cho sức mạnh của sự tử tế lan tỏa.'
    },
    {
      topic: 'Bản sắc văn hóa dân tộc',
      name: 'Rapper Đen Vâu & Tình yêu cội nguồn',
      detail: 'Sử dụng âm nhạc đại chúng để quảng bá vẻ đẹp thiên nhiên, con người Việt Nam ("Nấu ăn cho em"), dành toàn bộ doanh thu bài hát cho các dự án cộng đồng.'
    }
  ],
  goldenRules: [
    'Tuyệt đối KHÔNG xuống dòng: Đoạn văn 200 chữ chỉ viết trong một đoạn văn duy nhất. Lùi đầu dòng chữ cái đầu tiên và chấm kết thúc ở chữ cuối cùng.',
    'Dung lượng an toàn: Từ 18 - 25 dòng giấy thi (khoảng 2/3 đến 3/4 trang giấy thi).',
    'Dẫn chứng phải thật, không bịa đặt tên tuổi chung chung (tránh kiểu "ở xóm tôi có một bạn...").'
  ]
};

// 4. BÍ KÍP ĐỌC HIỂU (ĐẠT TRỌN 3 ĐIỂM)
const DOC_HIEU_HANDBOOK = [
  {
    category: '6 Phong cách ngôn ngữ',
    items: [
      { name: 'Sinh hoạt', sign: 'Khẩu ngữ, tiếng lóng, đối thoại thường ngày, giàu sắc thái tình cảm.' },
      { name: 'Nghệ thuật', sign: 'Tính hình tượng, truyền cảm, cá thể hóa (thơ, truyện ngắn, tiểu thuyết).' },
      { name: 'Báo chí', sign: 'Tin tức thời sự, số liệu, tính chính xác, thời gian địa điểm rõ ràng.' },
      { name: 'Chính luận', sign: 'Ngôn từ trang trọng, lập luận sắc bén, thuyết phục người nghe về tư tưởng.' },
      { name: 'Khoa học', sign: 'Thuật ngữ chuyên ngành, định lý, khái niệm logic, khách quan.' },
      { name: 'Hành chính', sign: 'Văn bản quy phạm, đơn từ, nghị định, điều khoản pháp lý.' }
    ]
  },
  {
    category: '6 Phương thức biểu đạt',
    items: [
      { name: 'Tự sự', sign: 'Kể lại một chuỗi sự việc có mở đầu, diễn biến và kết thúc, có nhân vật.' },
      { name: 'Miêu tả', sign: 'Tái hiện đường nét, màu sắc, âm thanh, hình ảnh để người đọc hình dung cụ thể.' },
      { name: 'Biểu cảm', sign: 'Bộc lộ trực tiếp cảm xúc, nỗi niềm, tâm tư tình cảm của tác giả.' },
      { name: 'Nghị luận', sign: 'Bàn bạc, đưa ra luận điểm, lý lẽ và dẫn chứng để thuyết phục.' },
      { name: 'Thuyết minh', sign: 'Cung cấp tri thức khách quan, nguồn gốc, công dụng của đối tượng.' },
      { name: 'Hành chính - công vụ', sign: 'Truyền đạt mệnh lệnh, quy định, thông tư của cơ quan nhà nước.' }
    ]
  },
  {
    category: 'Công thức trả lời câu hỏi Tác Dụng Biện Pháp Tu Từ',
    items: [
      {
        name: 'Bước 1: Chỉ rõ',
        sign: 'Gọi tên biện pháp tu từ và trích dẫn từ ngữ/hình ảnh chứa biện pháp đó.'
      },
      {
        name: 'Bước 2: Tác dụng nội dung',
        sign: 'Biện pháp đó làm nổi bật/nhấn mạnh nội dung gì? (Hình tượng, tâm trạng, hiện thực...)'
      },
      {
        name: 'Bước 3: Tác dụng nghệ thuật',
        sign: 'Giúp câu văn/thơ thêm sinh động, gợi cảm, giàu sức liên tưởng và tạo nhịp điệu hài hòa.'
      }
    ]
  }
];

// 5. TỔNG HỢP KIẾN THỨC CỐT LÕI ĐA MÔN KHÁC (TOÁN, LÝ, HÓA, ANH, SINH, SỬ)
const MULTI_SUBJECT_CHEAT_SHEET = [
  {
    subject: 'Toán học',
    icon: 'fas fa-square-root-variable',
    color: '#3b82f6',
    keyPoints: [
      'Khảo sát hàm số: y = (ax+b)/(cx+d) luôn không có cực trị. TCĐ: x = -d/c, TCN: y = a/c.',
      'Nguyên hàm từng phần: ∫ u dv = u.v - ∫ v du. Thứ tự ưu tiên đặt u: Nhất lô, nhì đa, tam lượng, tứ mũ.',
      'Không gian Oxyz: Khoảng cách từ M(x₀,y₀,z₀) đến mp Ax+By+Cz+D=0: d = |Ax₀+By₀+Cz₀+D| / √(A²+B²+C²).',
      'Mặt cầu (S): (x-a)² + (y-b)² + (z-c)² = R² có tâm I(a,b,c) bán kính R.'
    ]
  },
  {
    subject: 'Vật lí',
    icon: 'fas fa-atom',
    color: '#06b6d4',
    keyPoints: [
      'Nhiệt động lực học: Nguyên lý I ΔU = A + Q (Nhận: Q, A > 0; Sinh/Tỏa: Q, A < 0).',
      'Nhiệt lượng: Q = m.c.Δt (J); Q = λ.m (nóng chảy); Q = L.m (hóa hơi). Chuyển đổi: T(K) = t(°C) + 273,15.',
      'Từ thông: Φ = B.S.cos(α) với α là góc giữa B⃗ và pháp tuyến n⃗. Suất điện động e_c = - dΦ/dt.',
      'Phóng xạ: N(t) = N₀ . 2^(-t/T). Sau n chu kỳ bán rã, lượng còn lại là (1/2)ⁿ.'
    ]
  },
  {
    subject: 'Hóa học',
    icon: 'fas fa-flask-vial',
    color: '#10b981',
    keyPoints: [
      'Este: Thủy phân este no đơn hở trong NaOH cho muối và ancol. Duy nhất este fomat (HCOOR) tráng bạc được.',
      'Chất béo: Trieste của glixerol với axit béo (RCOO)₃C₃H₅. Xà phòng hóa luôn tạo ra glixerol C₃H₅(OH)₃.',
      'Amino axit: Tính chất lưỡng tính (tác dụng cả HCl và NaOH). Axit glutamic làm quỳ tím hóa hồng; Lysin làm quỳ tím hóa xanh.',
      'Peptit: Từ tripeptit trở lên có phản ứng màu Biure với Cu(OH)₂ tạo phức màu tím.'
    ]
  },
  {
    subject: 'Tiếng Anh',
    icon: 'fas fa-language',
    color: '#f59e0b',
    keyPoints: [
      'Rút gọn mệnh đề quan hệ: Chủ động dùng V-ing; Bị động dùng V3/ed; Có first/last/only dùng To V.',
      'Đảo ngữ No sooner: No sooner + had + S + V3/ed + than + S + V-ed (Hardly + had + S + V3/ed + when...).',
      'Điều kiện hỗn hợp: If + S + had V3 (quá khứ), S + would + V-nguyên thể (kết quả hiện tại).',
      'Phrasal verbs thường gặp: Call off = Cancel, Put off = Postpone, Give up = Abandon.'
    ]
  },
  {
    subject: 'Lịch sử',
    icon: 'fas fa-landmark',
    color: '#8b5cf6',
    keyPoints: [
      'Việt Bắc thu - đông 1947: Đánh bại kế hoạch "Đánh nhanh thắng nhanh", bảo vệ đầu não kháng chiến.',
      'Biên giới thu - đông 1950: Khai thông biên giới Việt - Trung, ta giành quyền CHỦ ĐỘNG trên chiến trường chính Bắc Bộ.',
      'Điện Biên Phủ 1954: "Lừng lẫy năm châu", đập tan kế hoạch Nava, buộc Pháp ký Hiệp định Giơ-ne-vơ.',
      'Hiệp định Pa-ri 1973: Buộc quân Mĩ rút hết về nước, tạo tiền đề giải phóng hoàn toàn miền Nam 1975.'
    ]
  }
];

// 6. THẺ NHỚ FLASHCARDS 3D LẬT THẺ TƯƠNG TÁC (TẬP TRUNG 5 TÁC PHẨM YÊU CẦU)
const FLASHCARDS = [
  {
    id: 'fc-v1',
    subject: 'literature',
    subjectName: 'Xuân Tóc Đỏ cứu quốc',
    question: 'Trong tác phẩm "Số đỏ", vì sao trận thua quần vợt của Xuân Tóc Đỏ lại được tung hô là hành động "cứu quốc"?',
    answer: 'Vì Xuân được chính phủ bí mật yêu cầu phải chịu thua để giữ thể diện cho vua Xiêm La, tránh nguy cơ chiến tranh ngoại giao. Xuân đã trơ tráo biến trận thua đó thành sự hy sinh lòng tự ái cá nhân vì nền hòa bình xứ sở.',
    hint: 'Màn kịch ngoại giao bi hài kịch của xã hội thượng lưu thời Âu hóa.'
  },
  {
    id: 'fc-v1b',
    subject: 'literature',
    subjectName: 'Xuân Tóc Đỏ cứu quốc',
    question: 'Nghệ thuật trào phúng độc đáo nhất trong đoạn trích "Xuân Tóc Đỏ cứu quốc" là gì?',
    answer: 'Nghệ thuật tạo tình huống nghịch dị bi hài: biến một trận thể thao thành biến cố bang giao, biến kẻ bịp bợm vô học thành bậc vĩ nhân cứu quốc qua giọng điệu mỉa mai cay độc của Vũ Trọng Phụng.',
    hint: 'Nghịch dị, mị dân và vạch trần xã hội Âu hóa rởm đời.'
  },
  {
    id: 'fc-v2',
    subject: 'literature',
    subjectName: 'Mùa lá rụng trong vườn',
    question: 'Hình tượng nhân vật chị Hoài trong "Mùa lá rụng trong vườn" mang ý nghĩa biểu tượng gì?',
    answer: 'Chị Hoài là hiện thân của đạo lý nghĩa tình son sắt, đôn hậu của phụ nữ Việt Nam. Dù đã tái giá, chị vẫn về thăm nhà chồng cũ chiều 30 Tết, mang hơi ấm tình thân hàn gắn những rạn nứt gia đình.',
    hint: 'Bữa cơm tất niên chiều 30 Tết bên bàn thờ tổ tiên.'
  },
  {
    id: 'fc-v2b',
    subject: 'literature',
    subjectName: 'Mùa lá rụng trong vườn',
    question: 'Ý nghĩa của thời khắc "Chiều 30 Tết bên bàn thờ tổ tiên" trong tiểu thuyết Ma Văn Kháng?',
    answer: 'Là không gian tâm linh thiêng liêng nhất của văn hóa Việt: nơi kết nối quá khứ với hiện tại, người sống với tổ tiên, là điểm tựa đạo đức bền vững che chở con người trước cơn lốc thực dụng.',
    hint: 'Sợi dây tâm linh gắn kết cội nguồn gia đình người Việt.'
  },
  {
    id: 'fc-v3',
    subject: 'literature',
    subjectName: 'Cảm hoài',
    question: 'Cặp câu thơ "Thời lai đồ điếu thành công dị / Vận khứ anh hùng ẩm hận đa" trong bài "Cảm hoài" (Đặng Dung) nói lên điều gì?',
    answer: 'Nói lên nỗi ngậm ngùi trước sự trớ trêu của thời thế: Gặp thời thì kẻ làm nghề mổ heo câu cá cũng dễ lập nên công nghiệp; khi thời vận đã qua đi thì bậc anh hùng hào kiệt cũng đành ngậm cay nuốt hận.',
    hint: 'Bi kịch của bậc anh hùng sinh không phùng thời.'
  },
  {
    id: 'fc-v4',
    subject: 'literature',
    subjectName: 'Cảm hoài',
    question: 'Hình tượng "Kỷ độ Long Tuyền đới nguyệt ma" (Mấy phen mài kiếm bóng trăng tà) mang ý nghĩa nghệ thuật gì?',
    answer: 'Là bức tượng đài bi tráng về người anh hùng: dù tóc đã bạc, thời vận đã hết nhưng đêm đêm vẫn mài kiếm dưới trăng, kiên cường giữ vững ý chí diệt giặc cứu nước đến hơi thở cuối cùng.',
    hint: 'Hình tượng tráng sĩ mài kiếm Long Tuyền dưới ánh nguyệt.'
  },
  {
    id: 'fc-v5',
    subject: 'literature',
    subjectName: 'Tây Tiến',
    question: 'Hai yếu tố cảm xúc nào luôn sóng đôi làm nên vẻ đẹp độc đáo của bài thơ "Tây Tiến" (Quang Dũng)?',
    answer: 'Cảm hứng lãng mạn và Khuynh hướng bi tráng. Tác giả không né tránh hiện thực khốc liệt, gian khổ hy sinh nhưng luôn nâng đỡ tâm hồn người lính bằng chất hào hoa, bay bổng.',
    hint: 'Lãng mạn kết hợp với bi tráng.'
  },
  {
    id: 'fc-v5b',
    subject: 'literature',
    subjectName: 'Tây Tiến',
    question: 'Hiệu quả nghệ thuật đặc sắc của câu thơ toàn thanh bằng: "Nhà ai Pha Luông mưa xa khơi"?',
    answer: 'Tạo nên âm điệu êm dịu mênh mang, gợi không gian bảng lảng khói sương mưa rừng Tây Bắc; xua tan sự mệt nhọc sau chặng đường leo dốc khúc khuỷu, thể hiện tâm hồn lãng mạn tinh tế của người lính.',
    hint: 'Âm hưởng 7 thanh bằng và chất lãng mạn người lính.'
  },
  {
    id: 'fc-v6',
    subject: 'literature',
    subjectName: 'Đàn ghi ta của Lor-ca',
    question: 'Chuỗi âm thanh "li-la li-la li-la" mở đầu và kết thúc bài thơ "Đàn ghi ta của Lor-ca" mô phỏng điều gì?',
    answer: 'Mô phỏng tiếng đàn ghi ta Flamenco buông lơi từng nhịp dây, đồng thời gợi liên tưởng đến những chùm hoa tử đinh hương (lilac) - biểu tượng cho sự bất tử của cái đẹp và nghệ thuật.',
    hint: 'Tiếng đàn và đóa hoa tử đinh hương.'
  },
  {
    id: 'fc-v7',
    subject: 'literature',
    subjectName: 'Đàn ghi ta của Lor-ca',
    question: 'Ý nghĩa câu thơ "Không ai chôn cất tiếng đàn / Tiếng đàn như cỏ mọc hoang" của Thanh Thảo?',
    answer: 'Khẳng định sức sống mãnh liệt, bất diệt của nghệ thuật và tư tưởng Lor-ca: bạo quyền phát xít có thể sát hại thể xác nhà thơ, nhưng tiếng đàn của chàng vẫn trường tồn, tự do sinh sôi như loài cỏ dại.',
    hint: 'Nghệ thuật đích thực không thể bị tiêu diệt.'
  }
];

// 7. NGÂN HÀNG CÂU HỎI TRÒ CHƠI "ĐẤU TRƯỜNG TRI THỨC 12"
const QUIZ_QUESTIONS = [
  // --- PHẦN 1: CHUYÊN ĐỀ 5 TÁC PHẨM VĂN HỌC YÊU CẦU ---
  {
    id: 'q-v1',
    subject: 'literature',
    subjectName: 'Xuân Tóc Đỏ cứu quốc',
    level: 1,
    question: 'Trong tác phẩm "Số đỏ" của Vũ Trọng Phụng, lý do thực sự khiến Xuân Tóc Đỏ phải chịu thua tay vợt quán quân Xiêm La là gì?',
    options: [
      'Vì tay vợt nước Xiêm có kỹ thuật quá vượt trội so với Xuân',
      'Vì các quan chức chính phủ yêu cầu Xuân phải thua để giữ gìn hòa bình ngoại giao giữa hai nước',
      'Vì Xuân bị chấn thương tay trong hiệp thi đấu thứ hai',
      'Vì Xuân nhận tiền hối lộ của các nhà cái cá cược'
    ],
    answer: 1,
    explanation: 'Nếu Xuân thắng, vua Xiêm sẽ nổi giận đe dọa chiến tranh. Chính phủ và giới thượng lưu đã van nài Xuân nhường trận để giữ gìn mối bang giao hòa bình.',
    tip: 'Chi tiết trào phúng: Một trận đấu quần vợt bị chính trị hóa thành vấn đề tồn vong của quốc gia.'
  },
  {
    id: 'q-v2',
    subject: 'literature',
    subjectName: 'Xuân Tóc Đỏ cứu quốc',
    level: 2,
    question: 'Sau khi cố tình để thua trận đấu, Xuân Tóc Đỏ đã có hành động gì trước sự phẫn nộ của công chúng?',
    options: [
      'Lén lút bỏ trốn khỏi sân vận động bằng cửa sau',
      'Đăng đàn diễn thuyết hùng hồn, biến trận thua nhục nhã thành sự hy sinh cao cả vì tổ quốc',
      'Quỳ xuống xin lỗi khán giả và trả lại tiền vé',
      'Thách đấu lại tay vợt Xiêm La một trận khác'
    ],
    answer: 1,
    explanation: 'Bằng tài mị dân láu cá, Xuân vỗ ngực tuyên bố mình vì đại cục hòa bình mà nhường nước bạn, khiến đám đông cuồng loạn tung hô Xuân là vị anh hùng cứu quốc.',
    tip: 'Nghệ thuật trào phúng: Biến kẻ bịp bợm thành đấng cứu thế.'
  },
  {
    id: 'q-v3',
    subject: 'literature',
    subjectName: 'Mùa lá rụng trong vườn',
    level: 1,
    question: 'Trong tiểu thuyết "Mùa lá rụng trong vườn" của Ma Văn Kháng, nhân vật chị Hoài trở về thăm gia đình ông Bằng vào thời điểm nào?',
    options: [
      'Sáng mùng 1 Tết Nguyên đán',
      'Chiều ngày 30 Tết',
      'Đêm giao thừa',
      'Ngày rằm tháng Giêng'
    ],
    answer: 1,
    explanation: 'Chị Hoài trở về vào đúng buổi chiều 30 Tết giáp hạt, mang theo hương vị mộc mạc và nghĩa tình ấm áp giữa lúc gia đình đang chuẩn bị bữa cơm tất niên.',
    tip: 'Thời điểm thiêng liêng: Chiều 30 Tết bên bàn thờ gia tiên.'
  },
  {
    id: 'q-v4',
    subject: 'literature',
    subjectName: 'Mùa lá rụng trong vườn',
    level: 2,
    question: 'Vẻ đẹp nổi bật nhất ở nhân vật chị Hoài trong đoạn trích "Mùa lá rụng trong vườn" là gì?',
    options: [
      'Sự giàu sang, thành đạt trên thương trường kinh tế mới',
      'Tấm lòng thủy chung, son sắt, trọn vẹn nghĩa tình với gia đình chồng cũ',
      'Sự khéo léo trong giao tiếp xã giao thời mở cửa',
      'Vẻ đẹp kiêu sa, đài các của phụ nữ Hà thành xưa'
    ],
    answer: 1,
    explanation: 'Dù anh Cừ đã hy sinh và chị đã đi bước nữa ở quê, chị Hoài vẫn trọn nghĩa vẹn tình, kính trọng ông Bằng như cha đẻ, là sợi dây hàn gắn nếp nhà truyền thống.',
    tip: 'Chị Hoài là biểu tượng của đạo lý nghĩa tình "uống nước nhớ nguồn".'
  },
  {
    id: 'q-v5',
    subject: 'literature',
    subjectName: 'Cảm hoài',
    level: 2,
    question: 'Hai câu thơ: "Thời lai đồ điếu thành công dị / Vận khứ anh hùng ẩm hận đa" trong bài "Cảm hoài" (Đặng Dung) thể hiện tâm sự gì?',
    options: [
      'Niềm tự hào về chiến công hiển hách của quân đội nhà Hậu Trần',
      'Nỗi xót xa, ngậm ngùi trước sự trớ trêu của thời thế đối với người anh hùng ôm chí lớn',
      'Lời khuyên người đời nên an phận thủ thường, tránh xa danh lợi',
      'Sự chán chường, buông xuôi trước cảnh nước mất nhà tan'
    ],
    answer: 1,
    explanation: 'Đặng Dung đúc kết quy luật cay đắng: Gặp thời kẻ tầm thường cũng dễ lập công; khi thời vận đã hết, bậc anh hùng dẫu tài ba cũng đành nuốt hận ngậm cay.',
    tip: 'Thời lai (gặp thời) đối với Vận khứ (hết vận).'
  },
  {
    id: 'q-v6',
    subject: 'literature',
    subjectName: 'Cảm hoài',
    level: 3,
    question: 'Hình tượng "Kỷ độ Long Tuyền đới nguyệt ma" (Mấy phen mài kiếm bóng trăng tà) ở cuối bài "Cảm hoài" khắc họa vẻ đẹp gì?',
    options: [
      'Vẻ đẹp nhàn tản, ung dung của một ẩn sĩ nơi thôn dã',
      'Khí phách kiên cường, bi tráng của vị tướng trượng phu quyết tâm diệt giặc đến cùng',
      'Nỗi sợ hãi cái chết trước sự truy đuổi của quân giặc',
      'Nỗi nhớ thương người thân nơi quê nhà trong đêm trăng'
    ],
    answer: 1,
    explanation: 'Dù đầu đã bạc vì lo nỗi nước nhà, người anh hùng vẫn đêm đêm mài bảo kiếm Long Tuyền dưới trăng, sẵn sàng chiến đấu hy sinh vì non sông xã tắc.',
    tip: 'Hình ảnh tráng sĩ mài kiếm dưới trăng là tượng đài bất tử về lòng trung trinh ái quốc.'
  },
  {
    id: 'q-v7',
    subject: 'literature',
    subjectName: 'Tây Tiến',
    level: 1,
    question: 'Hai câu thơ: "Sài Khao sương lấp đoàn quân mỏi / Mường Lát hoa về trong đêm hơi" trong bài thơ Tây Tiến của Quang Dũng gợi lên nét đẹp gì?',
    options: [
      'Sự hoang sơ, gian khổ nhưng đượm chất thơ mộng, lãng mạn',
      'Nỗi sợ hãi của người lính trước thiên nhiên hiểm trở',
      'Cảnh tượng chiến đấu khốc liệt giáp lá cà',
      'Nỗi nhớ quê hương da diết của người lính Hà thành'
    ],
    answer: 0,
    explanation: 'Sương lấp gợi sự khắc nghiệt gian khổ hành quân, nhưng "hoa về trong đêm hơi" lại mở ra không gian thi vị, huyền ảo, thể hiện tâm hồn lãng mạn của người lính Tây Tiến.',
    tip: 'Từ khóa "hoa về trong đêm hơi" là nét vẽ lãng mạn đặc trưng của Quang Dũng.'
  },
  {
    id: 'q-v8',
    subject: 'literature',
    subjectName: 'Tây Tiến',
    level: 2,
    question: 'Hình tượng người lính Tây Tiến trong câu thơ "Áo bào thay chiếu anh về đất / Sông Mã gầm lên khúc độc hành" thể hiện cảm hứng gì?',
    options: [
      'Cảm hứng bi quan, than thân trách phận',
      'Cảm hứng bi tráng, coi cái chết nhẹ tựa lông hồng, thi vị hóa sự hy sinh vì Tổ quốc',
      'Cảm hứng châm biếm sâu cay hiện thực chiến trường',
      'Cảm hứng lãng mạn thoát ly đời sống thực tại'
    ],
    answer: 1,
    explanation: '"Áo bào" và "về đất" đã tráng lệ hóa sự hy sinh của người lính, tiếng gầm của sông Mã như khúc đại nhạc tiễn đưa linh hồn người anh hùng vào cõi bất tử.',
    tip: 'Bi tráng: Đau thương nhưng hào hùng, lẫm liệt.'
  },
  {
    id: 'q-v9',
    subject: 'literature',
    subjectName: 'Đàn ghi ta của Lor-ca',
    level: 1,
    question: 'Chuỗi âm thanh "li-la li-la li-la" xuất hiện trong bài thơ "Đàn ghi ta của Lor-ca" của Thanh Thảo gợi liên tưởng đến điều gì?',
    options: [
      'Tiếng vó ngựa phi trên đường phố Madrid',
      'Tiếng đàn ghi ta Flamenco và những bông hoa tử đinh hương bất tử',
      'Tiếng súng trường của bọn phát xít Franco',
      'Tiếng chuông nhà thờ rung lên báo tử'
    ],
    answer: 1,
    explanation: 'Li-la vừa mô phỏng âm vang dây đàn ghi ta ngân nga, vừa là tên loài hoa tử đinh hương (lilac) - tượng trưng cho cái đẹp và linh hồn bất diệt của Lor-ca.',
    tip: 'Li-la = Tiếng đàn Flamenco + Hoa tử đinh hương.'
  },
  {
    id: 'q-v10',
    subject: 'literature',
    subjectName: 'Đàn ghi ta của Lor-ca',
    level: 3,
    question: 'Hình ảnh ẩn dụ "Tiếng đàn như cỏ mọc hoang" trong bài thơ của Thanh Thảo mang ý nghĩa sâu sắc nào?',
    options: [
      'Cho thấy tiếng đàn bị người đời lãng quên, không ai trân trọng',
      'Khẳng định nghệ thuật của Lor-ca có sức sống hoang dại, bền bỉ và bất diệt trong lòng nhân dân',
      'Thể hiện sự buồn bã, cô đơn của người nghệ sĩ trước cái chết',
      'Mô tả khung cảnh hoang vu nơi Lor-ca bị hành quyết'
    ],
    answer: 1,
    explanation: 'Cỏ mọc hoang là biểu tượng của sự sống tự nhiên mãnh liệt: Bạo lực phát xít có thể sát hại thể xác nhà thơ nhưng không thể dập tắt tiếng đàn tự do của chàng.',
    tip: 'Cỏ mọc hoang = Sức sống mãnh liệt, trường tồn của nghệ thuật chân chính.'
  },
  {
    id: 'q-v11',
    subject: 'literature',
    subjectName: 'Xuân Tóc Đỏ cứu quốc',
    level: 2,
    question: 'Sau khi trận đấu quần vợt kết thúc, sự trớ trêu tột đỉnh nào đã thể hiện bản chất nhố nhăng của tầng lớp thống trị thời bấy giờ?',
    options: [
      'Xuân Tóc Đỏ bị tống giam vì tội xúc phạm quan khách quốc tế',
      'Vua Xiêm xúc động trao tặng Huân chương cao quý và chính phủ Pháp - Nam tung hô Xuân như bậc vĩ nhân',
      'Xuân Tóc Đỏ bị nhân dân ném đá đuổi khỏi Hà Nội',
      'Hai quán quân Bắc Kỳ vạch trần âm mưu của Xuân trước tòa án'
    ],
    answer: 1,
    explanation: 'Một kẻ ma cà bông vô học, bịp bợm lại được vua Xiêm gắn huân chương, được chính quyền thực dân và tầng lớp thượng lưu cúi đầu kính phục, vạch trần bản chất lố lăng của xã hội kim tiền.',
    tip: 'Chi tiết trào phúng tột bậc: Sự đảo lộn mọi giá trị đạo đức và trí tuệ.'
  },
  {
    id: 'q-v12',
    subject: 'literature',
    subjectName: 'Mùa lá rụng trong vườn',
    level: 2,
    question: 'Hình tượng nhân vật ông Bằng trong tiểu thuyết "Mùa lá rụng trong vườn" (Ma Văn Kháng) đại diện cho điều gì?',
    options: [
      'Lối sống buông thả, thực dụng của lớp người mới thời kinh tế thị trường',
      'Cốt cách người trí thức Hà Nội xưa nền nếp, trọng gia phong và là điểm tựa tinh thần gìn giữ cội nguồn gia đình',
      'Sự lạc hậu, độc đoán, bảo thủ cản trở sự phát triển của con cái',
      'Người thương nhân Hà thành tháo vát làm giàu thời mở cửa'
    ],
    answer: 1,
    explanation: 'Ông Bằng là hiện thân của vẻ đẹp gia phong truyền thống Thăng Long - Hà Nội: nho nhã, bao dung, thâm trầm và đau đáu giữ gìn luân thường đạo lý trước cơn bão thực dụng.',
    tip: 'Ông Bằng: Cây cao bóng cả, linh hồn của nếp nhà truyền thống.'
  },
  {
    id: 'q-v13',
    subject: 'literature',
    subjectName: 'Cảm hoài',
    level: 3,
    question: 'Hai câu thơ: "Trí chúa hữu hoài phù địa trục / Tẩy binh vô lộ vãn thiên hà" trong bài "Cảm hoài" (Đặng Dung) thể hiện khát vọng kỳ vĩ nào?',
    options: [
      'Khát vọng chu du bốn bể, ngao du sơn thủy quên đi sự đời',
      'Hoài bão phò vua giúp nước xoay vần trục đất và khát khao kéo sông Ngân hà xuống để rửa sạch vũ khí chiến tranh',
      'Mong ước xây dựng cung điện nguy nga, lập nên triều đại mới',
      'Ý định giải giáp vũ khí để tìm kiếm hòa bình trong nhượng bộ'
    ],
    answer: 1,
    explanation: 'Hình tượng "phù địa trục" (nâng trục đất) và "vãn thiên hà" (kéo sông Ngân) là những ẩn dụ vũ trụ kỳ vĩ, thể hiện chí khí trượng phu ngút trời và khát vọng hòa bình chân chính cho muôn dân.',
    tip: 'Chí lớn kỳ vĩ tầm vóc vũ trụ của người anh hùng Đặng Dung.'
  },
  {
    id: 'q-v14',
    subject: 'literature',
    subjectName: 'Tây Tiến',
    level: 2,
    question: 'Nét đặc sắc nghệ thuật của hình ảnh thơ "Heo hút cồn mây súng ngửi trời" trong bài thơ "Tây Tiến" (Quang Dũng) là gì?',
    options: [
      'Cách nói khoa trương quá mức làm giảm đi tính chân thực của chiến trường',
      'Nghệ thuật nhân hóa "súng ngửi trời" vừa đặc tả độ cao chót vót hiểm trở của đèo dốc, vừa thể hiện tâm hồn trẻ trung, hóm hỉnh của người lính',
      'Tả thực khung cảnh thời tiết nhiều mây mù độc hại nơi rừng thiêng nước độc',
      'Sử dụng biện pháp đối ngẫu chặt chẽ giữa súng và trời'
    ],
    answer: 1,
    explanation: 'Chữ "ngửi" nhân hóa vô cùng táo bạo, tinh nghịch mang chất lính học trò Hà thành: đỉnh núi cao chạm mây trời nhưng mũi súng người lính còn vươn cao hơn thế.',
    tip: 'Chất lính hào hoa, tếu táo, lạc quan giữa muôn trùng hiểm nguy.'
  },
  {
    id: 'q-v15',
    subject: 'literature',
    subjectName: 'Đàn ghi ta của Lor-ca',
    level: 3,
    question: 'Trong bài thơ "Đàn ghi ta của Lor-ca", các cụm từ "tiếng ghi-ta tròn bọt nước vỡ tan", "tiếng ghi-ta ròng ròng máu chảy" sử dụng biện pháp tu từ nghệ thuật nào?',
    options: [
      'Nói quá và điệp từ',
      'Ẩn dụ chuyển đổi cảm giác (âm thanh được cảm nhận bằng thị giác và xúc giác bi thương)',
      'So sánh ngang bằng cổ điển',
      'Hoán dụ lấy bộ phận chỉ toàn thể'
    ],
    answer: 1,
    explanation: 'Thanh Thảo sử dụng nghệ thuật tượng trưng siêu thực: tiếng đàn vô hình được hữu hình hóa thành bọt nước tròn xoe rồi vỡ tan, biến thành sinh thể rỉ máu, gợi nỗi đau đớn tột cùng trước cái chết oan khốc của Lor-ca.',
    tip: 'Ẩn dụ chuyển đổi cảm giác: Thính giác -> Thị giác + Xúc giác.'
  },

];

// 8. HỆ THỐNG DANH HIỆU & HUY HIỆU VINH DANH
const ACHIEVEMENTS = [
  { id: 'first_quiz', title: 'Sĩ Tử Khởi Động', icon: 'fas fa-graduation-cap', desc: 'Trả lời đúng câu hỏi đầu tiên trên Đấu trường' },
  { id: 'streak_3', title: 'Bút Lực Dồi Dào', icon: 'fas fa-feather-pointed', desc: 'Đạt chuỗi trả lời đúng liên tiếp 3 câu' },
  { id: 'streak_7', title: 'Thần Bút Khai Hoa', icon: 'fas fa-fire-flame-curved', desc: 'Đạt chuỗi trả lời đúng liên tiếp 7 câu' },
  { id: 'lit_scholar', title: 'Nhà Phê Bình Văn Học', icon: 'fas fa-book-bookmark', desc: 'Trả lời đúng 5 câu hỏi môn Ngữ Văn 12' },
  { id: 'speed_demon', title: 'Tay Bút Tốc Độ', icon: 'fas fa-bolt', desc: 'Trả lời chính xác trong vòng dưới 4 giây' },
  { id: 'tower_champ', title: 'Chinh Phục Tháp Tri Thức', icon: 'fas fa-dungeon', desc: 'Vượt qua 8 tầng Tháp Tri Thức' },
  { id: 'top_valedictorian', title: 'Thủ Khoa Toàn Quốc', icon: 'fas fa-crown', desc: 'Đạt trên 1.500 điểm trong một ván đấu' },
  { id: 'flashcard_explorer', title: 'Mọt Sách Chuyên Cần', icon: 'fas fa-book-open-reader', desc: 'Lật xem ít nhất 6 thẻ Flashcard ôn tập' }
];

// 9. CHÂM NGÔN & ĐỘNG LỰC SĨ TỬ 12
const MOTIVATIONAL_QUOTES = [
  { quote: 'Mỗi trang sách các em lật hôm nay chính là bậc thang dẫn đến giảng đường mơ ước ngày mai.', author: 'Cẩm nang Sĩ tử 12' },
  { quote: 'Văn học là nhân học. Học văn không chỉ để đi thi, mà để bồi dưỡng một trái tim biết rung động và thấu cảm.', author: 'Thầy cô dặn dò' },
  { quote: 'Kỷ luật hôm nay là điểm 9+ ngày mai. Hãy kiên trì tới giây phút cuối cùng trong phòng thi!', author: 'Thủ khoa THPTQG' },
  { quote: 'Giọt mồ hôi rơi trên trang sách sẽ hóa thành giọt nước mắt hạnh phúc khi các em cầm giấy báo trúng tuyển.', author: 'Động lực 2007' }
];

// EXPORT TO WINDOW FOR GLOBAL ACCESS
if (typeof window !== 'undefined') {
  window.LITERATURE_WORKS = LITERATURE_WORKS;
  window.LIT_QUOTES = LIT_QUOTES;
  window.NLXH_HANDBOOK = NLXH_HANDBOOK;
  window.DOC_HIEU_HANDBOOK = DOC_HIEU_HANDBOOK;
  window.MULTI_SUBJECT_CHEAT_SHEET = MULTI_SUBJECT_CHEAT_SHEET;
  window.FLASHCARDS = FLASHCARDS;
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
  window.ACHIEVEMENTS = ACHIEVEMENTS;
  window.MOTIVATIONAL_QUOTES = MOTIVATIONAL_QUOTES;
}
