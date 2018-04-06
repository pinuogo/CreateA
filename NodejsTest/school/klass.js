var student = require('./student')
var teacher = require('./teacher')

function add(teacherName, students){
    teacher.add(teacherName)
    students.forEach(function(item,index) {
        student.add(item)
    });
}
exports.add = add   //传统模块实例
//module.exports = add    //特殊（其它）模块实例
//如果都写，module会覆盖传统模块实例