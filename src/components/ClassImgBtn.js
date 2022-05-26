export default function ClassImgBtn({target, initialState,setRemoved}){
  this.state = initialState;
  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState 
    };
    this.render()
  }

  this.element = document.createElement('div');
  this.element.id = `${this.state.imgId}/copied`;
  this.element.className = `img_btn_box`
  this.element.draggable = true
  target.appendChild(this.element)
  this.draaag = (e) => {
    const parent = e.target.closest('.grid_box');
    parent.className = 'grid_box';
    const dataPack = [this.state.imgId, this.state.src ]
    e.dataTransfer.setData("Text", dataPack);
  }
  this.removeImg = (e) => {
    e.preventDefault();
    setRemoved(this.state.imgId)
    const parent = e.target.closest('.grid_box');
    parent.className = 'grid_box';
    parent.innerHTML = ''
  }
  this.rotate = (e) => {
    const {text} = e.target.dataset
    if (text === 'R'){
      this.setState({rotate:(this.state.rotate + 1)%4})
    } else if (text === 'L'){
      this.setState({rotate: this.state.rotate === 0 ? 3: this.state.rotate - 1})
    }
  }
  this.setRotateAttri = () => {
    if (this.state.rotate === 0){
      return "rotate0"
    } else if (this.state.rotate === 1){
      return "rotate90"
    } else if (this.state.rotate === 2){
      return "rotate180"
    } else if (this.state.rotate === 3){
      return  "rotate270"
    }
  }
  this.element.ondragstart = this.draaag;

  this.render = () => {
    this.element.innerHTML = `
    <img class="drag_img ${this.setRotateAttri()}" src="${this.state.src}" alt="clicked_img"/>
    <div class="img_btn_reck">
      <button class='img_btn rotate_btn fa-solid fa-rotate-left' data-text="L"></button>
      <button class='img_btn remove_btn fa-solid fa-xmark'></button>
      <button class='img_btn rotate_btn fa-solid fa-rotate-right' data-text="R"></button>
    </div>
    `
    this.rotateBtns = this.element.querySelectorAll('.rotate_btn');
    this.rotateBtns.forEach((item) => {
      item.addEventListener('click', this.rotate)
    })
    this.removeBtn = this.element.querySelector('.remove_btn');
    this.removeBtn.addEventListener('click', this.removeImg)
  }
  this.render()
}