def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 5)

def check_win(board, player):
    for row in board:
        if all([spot == player for spot in row]):
            return True
    for col in range(3):
        if all([board[row][col] == player for row in range(3)]):
            return True
    if all([board[i][i] == player for i in range(3)]) or \
       all([board[i][2-i] == player for i in range(3)]):
        return True
    return False

def play_game():
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"

    for turn in range(9):
        print_board(board)
        print(f"Player {current_player}'s turn")
        row = int(input("Enter row (0-2): "))
        col = int(input("Enter column (0-2): "))

        if board[row][col] != " ":
            print("That spot is taken! Try again.")
            continue

        board[row][col] = current_player

        if check_win(board, current_player):
            print_board(board)
            print(f"Player {current_player} wins!")
            return

        current_player = "O" if current_player == "X" else "X"

    print_board(board)
    print("It's a tie!")

if __name__ == "__main__":
    play_game()
