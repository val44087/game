
import './styles.css';

const secretNumber = 6;

const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;

let currentSquare = 1;

squares.forEach(sq => {
    if (currentSquare === secretNumber) {
        sq.dataset.secret = 'true';
    }
    currentSquare++;
    sq.addEventListener('click', handleClick);
});

function handleClick() {
    const that = this as HTMLDivElement;

    // console.log('Got Clicked', that);
    if (that.dataset.secret) {
        that.classList.add('winner');
        that.removeEventListener('click', handleClick);

        squares.forEach(sq => {
            if (sq !== that) {
                that.classList.add('loser');
            }

        });
    } else {
        that.classList.add('loser');
        that.removeEventListener('click', handleClick);
    }
}




