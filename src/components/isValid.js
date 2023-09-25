function isValid(newProd,action) {
    const pattern = /^[a-zA-Zа-яА-ЯёЁ]+$/
    if (newProd.number <= 1000&& newProd.number.trim() !== "" && pattern.test(newProd.name)) {
        return action
    }
    else if (!pattern.test(newProd.name)) {
        alert("Введіть коректні дані в поле Caption")
    }
    else {
        alert("Введіть коректні дані в поле Amount(число не більше 1000)")
    }
}

export default isValid