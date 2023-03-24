// 1) შევქმნათ სტუდენტების  მასივი  რომელშიც იქნება შეყვანილი 20 სტუდენტის ინფორმაცია ობიექტის სახით 

//  -- ობიექტს უნდა ქონდეს შემდეგი თვისებები
//     -- სტუდენტის სახელი (სტრინგი)
//     -- სტუდენტის გვარი(სტრინგი)
//     -- ფოტო (სტრინგი) - ლინკისსახით
//     -- ასაკი (ნამბერი)
//     -- რეგისტრაციის თარიღი (სტრინგი) (2022)
//     -- კურსის ტიპი (სტრინგი) მაგ: პროგრამირება ,დიზაინი, სოციალური მარკეტინგი
//     -- დასწრება (ნამბერი) მაგ:80,100 (საბოლოოდ უნდა გამოჩნდეს html-ში პროცენტის სახით)
//     -- სტიპენდია (bool - true , false)


// 2) შევქმნათ შემდეგი ფუნქციები რომელიც დააბრუნებს 


//   -- ყველა სტუდენტს რომელიც არის სრულწლოვანი
//   -- ყველა სტუდენს რომელიც რეგისტრირებულია 2021-წლის შემდეგ
//   -- ყველა სტუდენტს რომელიც სწავლობს პროგრამირებაზე
//   -- ყველა სტუდენტს რომელსაც  აქვს 100% დასწრება
//   -- ყველა სტუდენტს რომელსაც აქვს სტიპენდია

// !!! არასავალდებულო
//       ჩამოსაშლელი მენიუ (select) კურსის ტიპების ჩამონათვალით: 
// 	1. პროგრამირება
// 	2. დიზაინი
// 3. სოციალური მარკეტინგი

// 4)დავამატოთ საიტზე ძებნა (სახელის და გვარის მიხედვით) 

// 5) მოცემული ფუნქციები უნდ აგამოვიტანოთ html ში თუ სტუდენტს ექნება სტიპენდია უნდა შეუქმნათ მწვანე ბლოკი span ტეგი დასახელებით 
// "სტიპენდიანტი"


// 6) თუ დასწრება უდრის 100% შეუქმნათ კომპონენტი span ტეგი დასახელებით წარმატებული 
      

let users = [
    {
        name:'მარიამი',
       lastname: 'კუპატაძე',
        imgURL : 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
        age : 24,
        registrationDate: 2022,
        courseType: 'პროგრამირება',
        attendance: 100,
        stipendiants : true
    },
    {
        name:'გიორგი',
       lastname: 'მაზიაშვილი',
        imgURL : 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        age : 18,
        registrationDate: 2020,
        courseType: 'დიზაინი',
        attendance: 50,
        stipendiants : false
    },
    {
        name:'დათო',
       lastname: 'ქათამაძე',
        imgURL : 'https://thumbs.dreamstime.com/b/silhouette-de-la-position-inconnue-d-homme-sur-plage-concept-solitude-et-les-hommes-silhouettent-mer-le-fond-clair-ciel-bleu-144968000.jpg',
        age : 17,
        registrationDate: 2021,
        courseType: 'სოციალური მარკეტინგი',
        attendance: 60,
        stipendiants :  false
    },
    {
        name:'ნიკა',
       lastname: 'იაგანაშვილი',
        imgURL : 'https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg',
        age : 28,
        registrationDate: 2019,
        courseType: 'პროგრამირება',
        attendance: 100,
        stipendiants : false
    },
    {
        name:'თეკლე',
       lastname: 'მჭედლიძე',
        imgURL : 'https://static.photocdn.pt/images/articles/2018/12/05/articles/2017_8/beginner_photography_mistakes-1.webp',
        age : 16,
        registrationDate: 2021,
        courseType: 'დიზაინი',
        attendance: 85,
        stipendiants : true
    },
    {
        name:'ნუცა',
       lastname: 'არაბული',
        imgURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvhToaydYr_YXHsKXh-SW5bSz9Kd6r71Qe5mracoYBJSA_VEQiXoxiIouQJAj-uqg7lM&usqp=CAU',
        age : 22,
        registrationDate: 2022,
        courseType: 'პროგრამირება',
        attendance: 89,
        stipendiants : true
    },
    {
        name:'დაჩი',
       lastname: 'შავლაყაძე',
        imgURL : 'https://static.freeimages.com/images/home/filetypes/photo.png',
        age : 28,
        registrationDate: 2022,
        courseType: 'სოციალური მარკეტინგი',
        attendance: 100,
        stipendiants : true
    },
    {
        name:'საბა',
       lastname: 'კობაძე',
        imgURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6Y0_o18OI_lQkgg4q64wkf66oe52MnxN0Q&usqp=CAU',
        age : 16,
        registrationDate: 2020,
        courseType: 'პროგრამირება',
        attendance: 65,
        stipendiants : false
    },
    {
        name:'ნოკა',
       lastname: 'კობახიძე',
        imgURL : 'https://thumbs.dreamstime.com/b/call-me-positive-young-black-woman-hand-near-ear-imitating-phone-pointing-camera-friendly-cheerful-millennial-african-224093577.jpg',
        age : 25,
        registrationDate: 2022,
        courseType: 'პროგრამირება',
        attendance: 100,
        stipendiants : true
    },
    {
        name:'ანა',
       lastname: 'ნაცვლიშვილი',
        imgURL : 'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg',
        age : 30,
        registrationDate: 2021,
        courseType: 'დიზაინი',
        attendance: 100,
        stipendiants : false
    },
    {
        name:'მარიამ',
       lastname: 'შეროზია',
        imgURL : 'https://imgv3.fotor.com/images/side/Overlay-multiple-images-using-Fotor.jpg',
        age : 14,
        registrationDate: 2022,
        courseType: 'სოციალური მარკეტინგი',
        attendance: 66,
        stipendiants : false
    },
    {
        name:'სალომე',
       lastname: 'აფციაური',
        imgURL : 'https://img.freepik.com/free-photo/woman-with-balloon-image-torn-paper-style_53876-128762.jpg',
        age : 27,
        registrationDate: 2022,
        courseType: 'პროგრამირება',
        attendance: 100,
        stipendiants : true
    },
    {
        name:'ლანა',
       lastname: 'თანდაშვილი',
        imgURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ihS3fAvKqH5iJ5R3j5KR7VXd5aoYVlbk5cmTyy-y0vU90nCYkWvsRXdQfAy02AgoZ8k&usqp=CAU',
        age : 20,
        registrationDate: 2021,
        courseType: 'დიზაინი',
        attendance: 87,
        stipendiants : false
    },
    {
        name:'ნანუკა',
       lastname: 'ბოწონელიძე',
        imgURL : 'https://picwish.com/wp-content/uploads/2021/11/featured-image-edited.jpg',
        age : 34,
        registrationDate: 2022,
        courseType: 'სოციალური მარკეტინგი',
        attendance: 87,
        stipendiants : true
    },
    {
        name:'მარიამი',
       lastname: 'კლდიაშვილი',
        imgURL : 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
        age : 24,
        registrationDate: 2023,
        courseType: 'პროგრამირება',
        attendance: 100,
        stipendiants : true
    },
    {
        name:'ავთო',
       lastname: 'ქუთათეწლიძე',
        imgURL : 'https://static.remove.bg/sample-gallery/people/man-wearing-sunglasses-1680317-thumbnail.jpg',
        age : 17,
        registrationDate: 2019,
        courseType: 'პროგრამირება',
        attendance: 71,
        stipendiants : false
    },
    {
        name:'ნია',
       lastname: 'კალანდაძე',
        imgURL : 'https://blog.hootsuite.com/wp-content/uploads/2022/07/social-media-image-sizes-guide.png',
        age : 20,
        registrationDate: 2022,
        courseType: 'დიზაინი',
        attendance: 100,
        stipendiants : true
    },
    {
        name:'ნინო',
       lastname: 'ნინოშვილი',
        imgURL : 'https://i.guim.co.uk/img/media/286255fcea511ec711764ccb45325404e01ba608/0_318_5760_3456/master/5760.jpg?width=1200&quality=85&auto=format&fit=max&s=b4b5056b2b94ce989799aa2e258ec511',
        age : 15,
        registrationDate: 2023,
        courseType: 'პროგრამირება',
        attendance: 100,
        stipendiants : false
    },
    {
        name:'ანამარია',
       lastname: 'ლომიძე',
        imgURL : 'https://static-cse.canva.com/_next/static/assets/04_quick-features_photo-editor_frames_w600xh600_ac129099278734529ec00091f892b1f35c931bd33287bd4f40686b1d4c825573.png',
        age : 29,
        registrationDate: 2021,
        courseType: 'სოციალური მარკეტინგი',
        attendance: 45,
        stipendiants : false
    },
    {
        name:'ნიკა',
       lastname: 'ნიკურაშვილი',
        imgURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gQXSbcnvbwmqX9SLap8AaifBD6PA-tOzDw&usqp=CAU',
        age : 17,
        registrationDate: 2023,
        courseType: 'პროგრამირება',
        attendance: 54,
        stipendiants : true
    }
]



function cardFromObject(obj){
    let attendance;
    let stipendiants;
    if (obj.attendance == 100){
        attendance = ` <span class="badge text-bg-success ">წარმატებული</span>`
    }else{
        attendance = `დასწრება: <span class="badge text-bg-danger">${obj.attendance}%</span>`
    }
    if (obj.stipendiants){
        badge = `<span class="badge text-bg-success d-block">სტიპენდიანტი</span>`
    }else{
        badge = `<span class="badge text-bg-danger d-block">არ არის სტიბენდიანტი</span>`
    }

    let card = `
    <div class="card text-center col-md-3" >
    <img src="${obj.imgURL}" class="card-img-top" alt="...">
    <div class="card-body">
       ${attendance}
      <h5 class="card-title">სახელი: ${obj.name}</h5>
      <h5 class="card-title">გვარი: ${obj.lastname}</h5>
      <p class="card-title">რეგისტრაციის თარიღი: ${obj.registrationDate} წელი</p>
      <p class="card-title">კურსის ტიპი: ${obj.courseType}</p>
       ${badge}
      <a href="#" class="btn btn-primary">ასაკი: ${obj.age}</a>
    </div>
  </div>
    `
    return card;
}

let cardDiv = document.querySelector(".cards");

function displayObjectInHtml(arrayName){
    cardDiv.innerHTML = ""
    for(let user of arrayName){
        let cardHTML = cardFromObject(user);
        cardDiv.innerHTML += cardHTML
    }

}
displayObjectInHtml(users);

//   -- ყველა სტუდენტს რომელიც არის სრულწლოვანი

let legalAge = document.querySelector(".legalAge");

legalAge.addEventListener("click", function(event){
    let filterStudent = users.filter(function(user){
        return user.age >= 18
    })
    displayObjectInHtml(filterStudent)
})

//   -- ყველა სტუდენს რომელიც რეგისტრირებულია 2021-წლის შემდეგ

let register = document.querySelector(".register")

register.addEventListener("click", function(event){
    let filterRegisterStudents = users.filter(function(user){
        return user.registrationDate > 2021
    })
    displayObjectInHtml(filterRegisterStudents)
})


//   -- ყველა სტუდენტს რომელიც სწავლობს პროგრამირებაზე

let program = document.querySelector(".program")

program.addEventListener("click", function(event){
   let filterStudentInProgramming = users.filter(function(user){
      return user.courseType == 'პროგრამირება';
   })
    displayObjectInHtml(filterStudentInProgramming);
})


//   -- ყველა სტუდენტს რომელსაც  აქვს 100% დასწრება

let fullAttendance = document.querySelector(".fullAttendance")

fullAttendance.addEventListener("click", function(event){
    let filterStudentFullAttendance = users.filter(function(user){
        return user.attendance == 100
    })
    displayObjectInHtml(filterStudentFullAttendance)
})


//   -- ყველა სტუდენტს რომელსაც აქვს სტიპენდია
let hasStipend = document.querySelector(".hasStipend")

hasStipend.addEventListener("click", function(event){
    let filterStudentHasStipend = users.filter(function(user){
        return user.stipendiants == true
    })
    displayObjectInHtml(filterStudentHasStipend);
})

// 4)დავამატოთ საიტზე ძებნა (სახელის და გვარის მიხედვით) 

let search = document.querySelector("#search")

search.addEventListener("keydown", function(event){
    let searchValue = this.value

   let filteredStudent = users.filter(function(user){
        return user.name.includes(searchValue) || user.lastname.includes(searchValue)
    })

    if (filteredStudent.length > 0){
        displayObjectInHtml(filteredStudent)
    }else{
        cardDiv.innerHTML = '<h1> ასეთი სახელით სტუდენტი ვერ მოიძებნა </h1>'
    }
})





// !!! არასავალდებულო
//       ჩამოსაშლელი მენიუ (select) კურსის ტიპების ჩამონათვალით: 
// 	1. პროგრამირება
// 	2. დიზაინი
// 3. სოციალური მარკეტინგი

 function onSelect() {
    const sb = document.querySelector('#framework')
           let filterStudent;
           let courseType;
           switch (sb.value) {
               case '1' : courseType = 'პროგრამირება';
                   break;
               case '2' : courseType = 'დიზაინი';
                   break;
               case '3' : courseType = 'სოციალური მარკეტინგი';
                   break;
           }
   
           filterStudent = users.filter(function(user) {
               return (user.courseType == courseType);
           })
               
            displayObjectInHtml(filterStudent);      
    };



